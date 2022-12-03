import React from 'react'
import styled from "styled-components"
import Field from './ContactFormField'
import {maxCol, minCol} from "../../function/SizeCol"
//import FormSend from './FormSend'

import useForm from "../../function/useForm"


import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'



const ContactFormItem = ( { item, ind, c } ) => {

    console.log('item', item);

    const image = getImage(item.image.localFile.childImageSharp)
    const bgImage = convertToBgImage(image)

    let formInputs={
        garbage: '',
        title: item.title,
    };

    for (let key in item.form) {
        //console.log('item.form', key, item.form[key].type)

        if ( item.form[key].type !== 'button'  ) {
            formInputs[item.form[key].name]=''
        }
    }
   // console.log('ss', formInputs)



    const { values, captureInput, submitForm, isLoading, error, message } = useForm(formInputs, ind);

    // background-size: cover;
    // background-image: url(${item.image.localFile.publicURL});

    const ImageBG = styled.div`
        padding-top: 121%;
        background-position: center center;
        @media(max-width: ${maxCol.sm}) {
            padding-top: 180%;
        }
        & > * {
            position: absolute !important;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    `;

    // {error || message ? (
    //     setTimeout(function (){
    //         document.querySelectorAll('.statusSend')?.classList?.remove("active")
    //     }, 4000)
    // ) : ''}


    return (
        <div id={`tab-item-contact-${ind}`} className={`anim tab-item-contact row m-0 flex-column-reverse flex-sm-row  ${
            c ? (c==ind ? 'active' : '' )
                : (ind===1 ? 'active' : '')
        }`}>
            <div className="col-12 col-sm-6 p-0">
                <div className="pos box-content box-form-content border-right h100 d-flex align-items-center justify-content-center">
                    <div id={`statusSend-${ind}`} className={`statusSend d-flex justify-content-center align-items-center anim ${error || message ? ' active ' : ''}`}>
                        {error ? <span className="formError">Sorry, something went wrong! <br /> The message has not been sent, <br /> contact us through messengers.</span>  : ''}
                        {message ? <span dangerouslySetInnerHTML={{__html: message}} className="formMessaga"/>  : ''}
                    </div>

                    <form onSubmit={submitForm} className='formStyle2 row'>
                        {item.form.map( (item, index) => (
                            <Field cols={item.cols} key={index} i={index+1} item={item} ind={ind}
                                disabled={isLoading}
                                values={values}
                                onChange={captureInput}
                                isLoading={isLoading}
                            />
                        ))}
                    </form>
                </div>
            </div>
            <div className="col-12 col-sm-6 p-0 col-right">
                <div className="box-content box-image-content">
                    <div className="box-img pos">
                        <ImageBG>
                            <BackgroundImage
                                Tag="div"
                                // Spread bgImage into BackgroundImage:
                                {...bgImage}
                                preserveStackingContext
                            />
                        </ImageBG>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactFormItem;