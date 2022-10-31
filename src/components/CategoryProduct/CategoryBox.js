import React from 'react';
import styled from "styled-components";
import CategoryItem from './CategoryItem';
import {minCol, maxCol} from "../../function/SizeCol";

const CategoryBox = ({item}) => {
    // const item = props.theme.pageContext;
    // console.log('CategoryBox >>', item);

    return (
        <Section className="categoryBox">
            {item.map( (item, index) => {
                //console.log('categoryItem', item);
                return (
                    <CategoryItem item={item} step={index+1} />
                )
            })}
        </Section>
    )
}
export default CategoryBox;

const Section = styled.section`
    .CategoryItem {
           border-top:1px solid #000;
           padding-top: 10rem;
           display: block;
           text-decoration: none;
           @media (max-width: ${maxCol.sm}) {
               padding-top: 3.5rem;
            }
    }
    .ImageBG {
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: calc(100vh - 13.4rem - 18rem ); 
        @media (max-width: ${maxCol.sm}) {
            min-height: calc(100vh - 8.8rem  - 12rem );
        }
        &:hover {
            filter: none;
        }
        @media(max-width: ${maxCol.lg}) {
            filter: none; 
        }
    } 
    .step {
        font-weight: 400; 
        font-size: 3rem;
        line-height: 3.6rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        color: #86644B;
        @media (max-width: ${maxCol.sm}) {
            font-size: 1.7rem;
             line-height: 1;
        }
    }
    .CategoryTitle {
        font-weight: 700;
        font-size: 6.8rem;
        line-height: 6.9rem;
        color: #1A0F07;
        margin-top: 0;
        margin-bottom: 0;
        @media (max-width: ${maxCol.sm}) {
            font-size: 3.4rem;
            line-height: 1.2;
        }
    }
    .box {
        padding-bottom: 10rem;
        padding-top: 5rem; 
        @media (max-width: ${maxCol.sm}) {
            padding-top: 2.5rem; 
            padding-bottom: 4rem;
        }
    }
`;

