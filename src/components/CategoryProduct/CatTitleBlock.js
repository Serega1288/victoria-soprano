import React from 'react';
import styled from "styled-components";
import Breadcrumb from "../breadcrumb";
import {maxCol} from "../../function/SizeCol";

const CategoryTitle = ({item, breadcrumb}) => {
    // const item = props.theme.pageContext;
    // console.log('catTitleBlock >>', item );
    return (
        <Section className="categoryTitle">
            <h1>{item}</h1>
            <Breadcrumb item={breadcrumb} />
        </Section>
    )
}
export default CategoryTitle;

const Section = styled.section`
    padding-top: 5.2rem;
    padding-bottom: 5.2rem;
    //padding-bottom: 1.1rem;
    @media(max-width: ${maxCol.sm}) {
         padding-top: 3.6rem;
        padding-bottom: 3.6rem;
    }
    h1 {
        font-weight: 700;
        font-size: 11.4rem;
        line-height: 11.6rem;  
        text-align: center;
        color: #86644B;
        margin: 0;
        @media(max-width: ${maxCol.sm}) {
            font-size: 4.5rem;
            line-height: 1.2;
        }
    }
`;