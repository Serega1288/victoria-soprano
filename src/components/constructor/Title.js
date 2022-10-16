import React from 'react';
import styled from 'styled-components';
import {minCol, maxCol} from "../../function/SizeCol";

const Title = ( {item} ) => {
    //console.log('Title >>>', item )
    const Title = styled.section` 
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

    return (
     <Title>
         <h1 className="title">
             {item.title}
         </h1>
     </Title>
    )
};
export default Title;

