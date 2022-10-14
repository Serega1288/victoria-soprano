import React from 'react';
import styled from 'styled-components';
import ConstructorItem from "./Constructor_Item";



const Collections = ( {item} ) => {
    //console.log('item >>>', item);

    const Section = styled.section`
        margin-top: 5rem;
        margin-bottom: 5rem; 
        @media(min-width: 576px) {   
            margin-top: 20rem;  
            margin-bottom: 20rem;
            .block-title { 
                font-size: 3rem;
                padding-bottom:2.6rem;
            } 
            
        }
        .collections-list {
            padding-top: 5rem;
            @media(min-width: 576px) {
                padding-top: 20rem; 
            }
        }
        .collections-item {
            
        } 
        .box { 
            @media (min-width: 576px) {
                max-width: 42.5rem; 
            }
           
        }
        .box-ImageBG {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%; 
            right: 0;
        }
        img {
            filter: none;
        }
        .WrapImg {
            @media (max-width: 575px) {
                display: block;
                width: calc( 100%  + ( var(--bs-gutter-x) * 2 ) );
                margin-left: calc( -1 * var(--bs-gutter-x) );  
                margin-bottom: 2.5rem;
            }
        }
        .ImageBG {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0; 
            right: 0; 
            z-index: 1;
            background-size: cover;
            background-position: center center;  
            filter: none;
        }
        .collection-item {
            margin-bottom: 20rem;
            @media (max-width: 575px) {
                margin-bottom: 2rem;
            } 
            position: relative;
            .title { 
                color: #86644b;  
                font-family: 'Bolkit';
                font-size: 4.5rem;
                font-weight: 400;
                line-height: 4.95rem;
                margin-bottom: 1.7rem; 
                @media (max-width: 575px) {
                    font-size: 2.4rem;
                    line-height: 2.64rem;
                    margin-bottom: 1rem; 
                }
            }
            .text { 
                color: #1a0f07;
                font-size: 1.8rem;
                line-height: 2.6rem;
                margin-bottom: 2rem; 
                max-width: 32rem;
                @media (max-width: 575px) {
                    font-size: 1.7rem;
                    line-height: 2.3rem;
                    margin-bottom: 1rem; 
                } 
            } 
            a {
                margin-bottom: 5rem;
            }
            &:nth-child(odd) {
                img {
                    @media(min-width: 576px) {
                        filter: grayscale(100%);
                    }
                    &:hover {
                        filter: none;
                    }
                }
            }
            &:nth-child(even) {
                .ImageBG {
                    @media(min-width: 576px) {
                        filter: grayscale(100%);
                    }
                    &:hover {
                        filter: none;
                    }
                }
            }
        }
        
    `;

    return (
        <Section className="collections">

            <div className="container">
                <h2 className="block-title">
                    {item.blockTitle}
                </h2>
            </div>

            <div className="collections-list">

                {item.collection.map( (item, index) => (
                    <ConstructorItem key={index} item={item}  />
                ))}

            </div>

        </Section>
    )
};

export default Collections;



