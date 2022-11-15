import React from 'react';
import styled from "styled-components";
import {minCol} from "../../function/SizeCol";

const Editor = ( { item } ) => {
    console.log('contact form >>>', item);

    const ImageBG = styled.div`  
        background-size: cover;
        background-image: url(${ item.image.localFile.publicURL });
        padding-top: 121%;
    `;

    return (
        <Section className="contact-form">
            <div className="container">
                <div className="box ContactData">
                    <div className="box-title border-right">
                        {/*{item.title}*/}
                    </div>
                    <div className="row m-0">
                        <div className="col-12 col-sm-6 p-0">
                            <div className="box-content border-right h100">
                                !! <form action=""></form>
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
                </div>
            </div>
        </Section>
    )
}
export default Editor;

const Section = styled.section` 
    margin-top: -1px;
    
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
`;

