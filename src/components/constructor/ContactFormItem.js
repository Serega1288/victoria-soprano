import React from 'react'
import styled from "styled-components"
import Field from './ContactFormField';
import {maxCol, minCol} from "../../function/SizeCol";

const ContactFormItem = ( { item, ind, c } ) => {

    const ImageBG = styled.div`
        background-size: cover;
        background-image: url(${item.image.localFile.publicURL});
        padding-top: 121%;
        background-position: center center;
        @media(max-width: ${maxCol.sm}) {
            padding-top: 180%;
        }
    `;

    return (
        <div id={`tab-item-contact-${ind}`} className={`anim tab-item-contact row m-0 flex-column-reverse flex-sm-row  ${
            c ? (c==ind ? 'active' : '' )
                : (ind===1 ? 'active' : '')
        }`}>
            <div className="col-12 col-sm-6 p-0">
                <div className="box-content box-form-content border-right h100 d-flex align-items-center justify-content-center">
                    <form className='formStyle2'>
                        {item.form.map( (item, index) => (
                            <Field key={index} i={index+1} item={item} ind={ind} />
                        ))}
                    </form>
                </div>
            </div>
            <div className="col-12 col-sm-6 p-0 col-right">
                <div className="box-content box-image-content">
                    <div className="box-img">
                        <ImageBG />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactFormItem;