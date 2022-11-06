import React from 'react';
import styled from 'styled-components';
import {maxCol} from "../../function/SizeCol";

const Content1 = ( {item} ) => {
    //console.log('text img img >>>', item )
    const Section = styled.section`
        // .section-box {
        //     
        // }
        .row > * {
            padding-right: 2.5rem;
            padding-left: 2.5rem; 
            @media(max-width: ${maxCol.sm}) {
                padding-right: 1rem;
                padding-left: 1rem; 
            }
        }
        .text {
            font-size: 1.8rem;
            @media(max-width: ${maxCol.sm}) {
                font-size: 1.6rem; 
                line-height: 2.3rem;
            }
        }
    `;
// grey
    return (
        <Section className="section content1">
            <div className="container section-box">
                <div className="row">
                    <div className="order-4 order-md-1 col-12 col-md-4 d-flex align-items-end">
                        <div className="text" dangerouslySetInnerHTML={{__html: item.editor}} />
                    </div>
                    <div className="order-md-2 col-6 col-md-4">
                        <img className={ item.notColor1 === true && 'grey' } src={item.foto1.localFile.publicURL} alt=""/>
                    </div>
                    <div className="order-md-3 col-6 col-md-4">
                        <img className={ item.notColor2 === true && 'grey' } src={item.foto2.localFile.publicURL} alt=""/>
                    </div>
                </div>
            </div>
        </Section>
    )
};
export default Content1;

