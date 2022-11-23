import React from 'react';
import styled from "styled-components";
import Breadcrumb from "../breadcrumb";
import {maxCol} from "../../function/SizeCol";

const CategoryTitle = ({item, breadcrumb}) => {
    // const item = props.theme.pageContext;

    const text = breadcrumb?.theme?.pageContext?.ACFcategory?.edit;
    //console.log('catTitleBlock >>', breadcrumb );
    return (
        <Section className="categoryTitle">
            <h1>{item}</h1>
            { text ?
                <div className="container">
                    <div className="text" dangerouslySetInnerHTML={{__html: text }} />
                </div>
                :
                 ''
            }

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
    .text {
        font-size: 2.2rem;
        line-height: 1.4;
        padding-top: 3rem;
        max-width: 100rem;
        margin: auto;
        p {
            margin: 0 0 1rem;
        }
        @media(max-width: ${maxCol.sm}) {
            font-size: 1.6rem;
            padding-top: 1.5rem;
        }
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