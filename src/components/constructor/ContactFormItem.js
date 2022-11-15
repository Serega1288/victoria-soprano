import React from 'react'
import styled from "styled-components"
import Field from './ContactFormField';

const ContactFormItem = ( { item, ind } ) => {

    const ImageBG = styled.div`
        background-size: cover;
        background-image: url(${item.image.localFile.publicURL});
        padding-top: 121%;
    `;

    return (
        <div id={`tab-item-contact-${ind}`} className={`tab-item-contact row m-0 ${ ind===1 ? ' active ': ''}`}>
            <div className="col-12 col-sm-6 p-0">
                <div className="box-content border-right h100 d-flex align-items-center justify-content-center">
                    <form className='formStyle2'>
                        {item.form.map( (item, index) => (
                            <Field key={index} i={index+1} item={item} ind={ind} />
                        ))}
                    </form>
                </div>
            </div>
            <div className="col-12 col-sm-6 p-0 col-right">
                <div className="box-content">
                    <div className="box-img">
                        <ImageBG />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactFormItem;