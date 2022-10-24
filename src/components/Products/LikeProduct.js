import React from 'react';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";
import ListProduct from "../CategoryProduct/CategoryListProduct";
import ProductItem from "../CategoryProduct/ProductItem";


const TitleH = styled.section` 
        .title {
            font-weight: 700;
            font-size: 6.8rem; 
            line-height: 1;
            margin-top: 5rem;
            margin-bottom: 10rem;
            text-align: center;
            @media(max-width: ${maxCol.sm}) {
                margin-top: 3.6rem;
                margin-bottom: 2.6rem;
                font-size: 3.4rem; 
            }
        }
`;

const LikeProduct = ({item}) => {
    //console.log('LikeProduct', item.like);


    return (
        <Section className="section boxLikeProduct">
            <TitleH>
                <h1 className="title">
                    Also you will like
                </h1>
            </TitleH>
            <div className="container">
                <div className="ListProduct">
                    {item.map( (item, index) => {
                        console.log('categoryItem', item);
                        return (
                            <></>
                        )
                    })}
                </div>
            </div>
        </Section>
    );
}
export default LikeProduct;

const Section = styled.section`
    border-top: 1px solid #000;
    .boxLikeProduct {
        
    }
    .ListProduct {
         
    }
`;
