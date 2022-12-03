import React from 'react';
import styled from 'styled-components';
import CollectionItem from "./Collection_Item";
import {minCol, maxCol} from "../../function/SizeCol";


const Collections = ( {item} ) => {
    //console.log('item >>>', item);

    const Section = styled.section`
        .box { 
            @media (min-width: ${minCol.sm}) {
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
            @media (max-width: ${maxCol.sm}) {
                display: block;
                width: calc( 100%  + ( var(--bs-gutter-x) * 2 ) );
                margin-left: calc( -1 * var(--bs-gutter-x) );  
                margin-bottom: 2.5rem;
            }
        }
        .ImageBG {
            position: absolute !important;
            top: 0;
            bottom: 0;
            left: 0; 
            right: 0; 
            z-index: 1;
            background-size: cover;
            background-position: top center;  
            filter: none;
            &.first {
                position: relative !important;
                padding-top: 120%;
            }
        }
        .collections-list {
            
        }
       
        .collection-item {
            margin-bottom: 10rem;
            //margin-bottom: 20rem;
            a {
                text-decoration: none;
            }
            @media (max-width: ${maxCol.sm}) {
                margin-bottom: 2rem;
                .WrapText {
                     padding: 2rem 0;
                     margin-bottom: 5rem;
                     position: absolute;
                     z-index: 2;
                     bottom: 3rem;
                     left: 0;
                     right: 0;
                     &:before {
                        content: '';
                        display: block;
                        left: -100px;
                        right: -100px;
                        top: 0;
                        z-index: -1;
                        bottom: 0;
                        position: absolute;
                        background: rgba(255,255,255,0.5);
                     }
                     .btn {
                        margin-bottom: 0;
                     }
                }
            } 
            position: relative;
            .title { 
                color: #86644b;  
                font-family: 'Bolkit';
                font-size: 4.5rem;
                font-weight: 400;
                line-height: 4.95rem;
                margin-bottom: 1.7rem; 
                @media (max-width: ${maxCol.sm}) {
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
                @media (max-width: ${maxCol.sm}) {
                    font-size: 1.7rem;
                    line-height: 2.3rem;
                    margin-bottom: 1rem; 
                } 
            } 
            a {
                margin-bottom: 5rem;
            }
            &:nth-child(odd) {
                .ImageBG.first {
                    @media(min-width: ${minCol.sm}) {
                        filter: grayscale(100%);
                    }
                    &:hover {
                        filter: none;
                    }
                }
            }
            &:nth-child(even) {
                .ImageBG:not(.first) {
                    @media(min-width: ${minCol.sm}) {
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
        <Section className="collections section">

            <div className="container box-title">
                <h2 className="block-title">
                    {item.blockTitle}
                </h2>
            </div>

            <div className="collections-list section-box">

                {item.collection.map( (item, index) => (
                    <CollectionItem key={index} item={item}  />
                ))}

            </div>

        </Section>
    )
};

export default Collections;



