import React from 'react';
import styled from 'styled-components';
import {minCol, maxCol} from "../../function/SizeCol";

const Content1 = ( {item} ) => {
    //console.log('img title text  >>>', item )
    const Section = styled.section` 
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
        .title {
            font-size: 4.5rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            @media (max-width: ${maxCol.sm} ) {
                font-size: 2.2rem;  
                line-height: 135%;
                margin-bottom: 1rem;
            }
        }
        .box-text { 
            font-size: 1.6rem;
            @media (min-width: ${minCol.md} ) {
                max-width: 340px;   
                font-size: 1.8rem; 
            }
            margin-right: 3.6rem;
        }
    `;
// grey
    return (
        <Section className="section content2">
            <div className="container section-box">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <img className={ item.notColor === true && 'grey' } src={item.foto.localFile.publicURL} alt=""/>
                    </div>
                    <div className="col-12 col-md-5 d-flex align-items-center justify-content-end">
                        <div className="box-text">
                            <h2 className="title">
                                {item.title}
                            </h2>
                            <div className="text" dangerouslySetInnerHTML={{__html: item.editor}}></div>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    )
};
export default Content1;

