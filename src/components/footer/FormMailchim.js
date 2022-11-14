import React, {useEffect, useState} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'


export default class NewsLetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message:'',
            statusSend: false
        }
    }


    changeEmailHandler = (event) => {
        this.setState({email: event.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        //this.setState({message:'THANKS !!!'})
        this.setState({statusSend: false})
        addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
            .then(data => {
                // I recommend setting data to React state
                // but you can do whatever you want (including ignoring this `then()` altogether)
                console.log('data send >>>>', data)

                data.result === 'success' ?
                    this.setState({statusSend: true, message: data.msg}) :
                    this.setState({statusSend: true, message: data.msg})



                const timer = setTimeout(() => {
                    this.setState({statusSend: false})
                }, 4000);
                return () => clearTimeout(timer);

            })
            .catch(() => {
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })
        this.setState({email: ''})
    }

    render () {
        //console.log('data >>', this.handleSubmit)
        return (
            <div className="boxForm pos">
                <div className={`statusSend ${this.state.statusSend && 'send'}`}></div>
                <div className='sendMessage anim'>
                    {
                        this.state.message
                    }
                </div>
                <form id="MailChimpForm" className={`anim subscribe Newsletter` }
                    onSubmit={this.handleSubmit}>

                    <label htmlFor="m-email" className="d-block">
                        <input required type="text"
                               value={this.state.email}
                               onChange={this.changeEmailHandler}
                               name='email' id="m-email"
                               placeholder="Email"
                        />
                    </label>
                    <label className="radio d-flex align-items-center" htmlFor="term-Newsletter">
                        <input required id="term-Newsletter" type="checkbox" className="d-flex" />
                        <span className="d-flex">I accept the policy to subscribe to emails</span>
                    </label>

                    <button className="btn_send btn style-1" type="submit">Send</button>
                </form>

            </div>
        )
    }
}
