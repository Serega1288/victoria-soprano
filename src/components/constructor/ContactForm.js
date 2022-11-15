import React from 'react'
import styled from "styled-components"
import {minCol} from "../../function/SizeCol"
import ContactFormItem from './ContactFormItem'

const Editor = ( { item } ) => {
    //console.log('contact form >>>', item);


    const clickTab = (index) => {
        console.log('>>>', index )

        document.querySelector('.tab-title').classList.remove("active")
        document.getElementById(`tab-title-${index}`).classList.add("active")

        document.querySelector('.tab-item-contact').classList.remove("active")
        document.getElementById(`tab-item-contact-${index}`).classList.add("active")

    }
    return (
        <Section className="contact-form">
            <div className="container">
                <div className="box ContactData">
                    <div className="box-title box-tabs-title d-flex justify-content-center align-items-center">
                        {item.listTabForm.map( (item, index) => (
                            <span
                                onClick={() => clickTab(index+1)}
                                className={`tab-title ${ index===0 ? 'active' : '' }`} key={index}

                                  id={`tab-title-${index+1}`} >
                                    {item.title}
                            </span>
                        ))}
                    </div>
                    <div className="wrap-tabs-contact">
                        {item.listTabForm.map( (item, index) => (
                            <ContactFormItem key={index} ind={index+1} item={item}  />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Editor;

const Section = styled.section` 
    margin-top: -1px;
    .wrap-tabs-contact {
        
    }
    .tab-item-contact {
        
    }
    .tab-title {
        padding: 0 1rem;
        display: inline-block;
            cursor: pointer; 
            &:after {
                margin-top: 0.5rem;
                content:'';
                display: block;
                height: 1px;
                width: 0;
                transition: all 0.5s ease; 
                background: #000;
            }
         
        &.active {
            &:after {
               width: 100%;
            }
        }
    }
    .col-right .box-content {
        padding-right: 0;
    }
    .box {
       border: 1px solid #1A0F07;
    }
    .text {
        
    }
    .box-img {
        
    }
    .box-title {
        font-family: 'sfPro';
        padding: 2rem 6rem;
        border-bottom: 1px solid #1A0F07;
        text-transform: uppercase;
        font-size: 2.2rem;
        line-height: 1;
    } 
    .border-right {
        border-right: 1px solid #1A0F07;
    }
    .box-content {
        padding: 7rem 6rem;
    }
    
    .formStyle2 {
        width: 100%;
        label {
            margin-bottom: 2rem;
            display: block;
           
        }
        input, textarea {
            display: block;
            width:100%;
            background: rgba(0,0,0,0);
            border: 1px solid #000000;
            padding: 0 1rem;
        }
        input {
            height: 5rem;
        }
        textarea {
            height: 10rem;
            padding: 1rem;
        }
        span {
            display: block;
            margin-bottom: 0.5rem;
        }
        button {
            margin-top: 2rem;
            height: 5rem;
            min-width: 20rem;
        }
    }
    .box-field-button {
        text-align: center;
    }
`;

