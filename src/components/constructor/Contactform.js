import React from 'react';
import styled from "styled-components";

const Editor = ( { item } ) => {
    console.log('contact form >>>', item);
    return (
        <Section className="contact-form">
            <div className="container">
                <div className="row">
                    .
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="box-title">
                            {item.titleForm}
                        </div>
                        <div className="box-content">
                            !! <form action=""></form>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="box-title">
                            {item.titleImage}
                        </div>
                        <div className="box-content">
                            <div className="box-img">
                                {/*<img src={item.image.localFile.publicURL} alt=""/>*/}
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
    .text {
        
    }
    .box-img {
        
    }
`;

