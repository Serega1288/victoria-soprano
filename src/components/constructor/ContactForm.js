import React, {useEffect, useState} from 'react'
//import styled from "styled-components"
import ContactFormItem from './ContactFormItem'
//import {maxCol, minCol} from "../../function/SizeCol";
// import queryString from "query-string"
import Section from "../../styles/ContactFormStyle"

const ContactForm = ( {item, href } ) => {

    const [c, setC] = useState(href)
    useEffect(() => {

        const x = href.split('?tabs=')[1]?.split('#')[0];
        // console.log('href >>>',  x )
        setC(x)
    })

    const clickTab = (index) => {

        console.log('clickTab >>>', index )

        document.querySelectorAll('.tab-title.active')[0]?.classList.remove("active")
        document.querySelectorAll('.anim.tab-item-contact.active.row.m-0')[0]?.classList.remove("active")


        document.getElementById(`tab-title-${index}`).classList.add("active")
        document.getElementById(`tab-item-contact-${index}`).classList.add("active")


        console.log('tabs index >>>>', index)

        //event.target.classList.add("active")

        // document.getElementById(`tab-title-${index}`).classList.add("active")
        //
        //
        // document.getElementById(`tab-item-contact-${index}`).classList.add("active")

    }
    return (
        <Section id="contact-form" className="contact-form">

            <div className="container">
                <div className="box ContactData">
                    <div className="box-title box-tabs-title d-flex justify-content-center align-items-center">
                        {item.listTabForm.map( (item, index) => (
                            <span
                                onClick={()=>clickTab(index+1)}
                                key={index}
                                className={`tab-title ${ 
                                    c ? (c==index+1 ? 'active' : '' )
                                    : (index===0 ? 'active' : '') 
                                }`}


                                // className={`tab-title ${ c==index+1 || index===0 ? 'active' : '' }`} key={index}

                                  id={`tab-title-${index+1}`} >
                                    {item.title}
                            </span>
                        ))}
                    </div>
                    <div className="wrap-tabs-contact pos">
                        {item.listTabForm.map( (item, index) => (
                            <ContactFormItem key={index} ind={index+1} item={item} c={c}  />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default ContactForm;



