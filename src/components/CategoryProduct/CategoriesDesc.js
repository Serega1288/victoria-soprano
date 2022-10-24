import React from 'react';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";


const CategoryDesc = ({item}) => {
    //console.log('CategoryDesc >>', item );



    return (
        <Section className="CategoryDesc">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="title">
                            {item.name}
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="text" dangerouslySetInnerHTML={{__html: item.ACFcategory.edit }} />
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default CategoryDesc;

const Section = styled.section`
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding-top: 10rem;
    padding-bottom: 10rem; 
    @media (max-width: ${maxCol.sm}) {
        padding-top: 5rem;
        padding-bottom: 5rem; 
    }
    .title {
        color: #1a0f07;
        font-family: 'Bolkit';
        font-size: 6.8rem;
        font-weight: 700;
        @media (max-width: ${maxCol.sm}) {
             font-size: 5rem;
             margin-bottom: 0rem;
             line-height: 1.2;
        }
    }
    .text {
        font-size: 1.8rem;
        line-height: 2.6rem;
        padding-top: 1rem;
        @media (max-width: ${maxCol.sm}) {
            font-size: 1.6rem;
            line-height: 2.1rem; 
        }
    }
`;