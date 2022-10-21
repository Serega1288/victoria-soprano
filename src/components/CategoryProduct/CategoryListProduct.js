import React from 'react';
import styled from "styled-components";
import {minCol, maxCol} from "../../function/SizeCol";
import ProductItem from "./ProductItem";

const ListProduct = ({item}) => {
    //console.log('ListProduct >>', item );
    return (
        <Section className="ListProduct">
            <div className="container">
                <div className="row row-cols-2 row-cols-sm-3">
                    {item.map( (item, index) => {
                        //console.log('categoryItem', item);
                        return (
                            <ProductItem key={index} item={item} />
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}
export default ListProduct;

const Section = styled.section`
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media (max-width: ${maxCol.sm}) {
        .container {
            padding-left: 0.1rem;
            padding-right: 0.1rem;
            .row {
                --bs-gutter-x: 0.35rem;
            }
        }
    }
    
    --bs-gutter-x: 1.5rem;
    @media (max-width: ${maxCol.sm}) {
        padding-top: 5rem; 
        padding-bottom: 5rem;
    } 
    .ImageBG {
        display: block;
        padding-top: 194%;
        
        background-size: cover;
        background-position: center center;
    }
    .ProductItemTitle {
        font-size: 4.5rem;
        line-height: 1;
        color: #000;
        margin-top:2.5rem;
        margin-bottom:2.5rem;
        @media (max-width: ${maxCol.sm}) {
            font-size: 2.2rem;
            margin-top:1.5rem;
            margin-bottom:2.2rem;
            padding-left: 1.5rem; 
            padding-right: 1.5rem;
        }
    } 
    a { 
        text-decoration: none;
        margin-bottom: 7.5rem;
        @media (max-width: ${maxCol.sm}) {
            margin-bottom: 0rem;
        }
    }
    @media(max-width:${maxCol.md}) {      
        .row > a {
            &:nth-child(3n+3) {
                padding-top: 5rem;
                border-top: 1px solid #000;
                border-bottom: 1px solid #000;
                margin-bottom: 2.5rem;
                width: 100%;
                padding-left: 1.6rem;
                padding-right: 1.6rem;
                .ImageBG {
                   padding-top: 152%;
                } 
            }
        }
    }
    @media(min-width:${minCol.md}) {
        .row > a {
            &:nth-child(5n+1), &:nth-child(5n+2) {
                width: 50%; 
                --bs-gutter-x: 3rem;
                .ImageBG {
                    padding-top: 138%;
                }
            }
        }
    }
    
`;
