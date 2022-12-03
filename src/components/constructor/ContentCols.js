import React from 'react';
import styled from "styled-components";
import {minCol, maxCol} from "../../function/SizeCol";

import { getImage, GatsbyImage  } from "gatsby-plugin-image"

const ContentCols = ( { item } ) => {
    console.log('content cols >>> ', item )

    return (
        <Section className="section  contentCols">
            <div className="container section-box">
                <div className={`row d-flex  ${item.reverse ? 'flex-row-reverse' : 'flex-row' }`}>
                    <div className={`left col-12 col-sm-7 col-md d-flex align-items-${ item.vertical }`}>
                        <div className="text" dangerouslySetInnerHTML={{__html: item.editor}} />
                    </div>
                    <div className="right col-12 col-sm-5 col-md-auto">
                        <GatsbyImage style={{width: '100%'}} image={getImage(item.foto.localFile.childImageSharp)} />
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default ContentCols;


const Section = styled.section`
    .text {
        margin-top: 1.5rem;
        font-size: 1.6rem;
        @media (min-width: ${minCol.md}) {
            max-width: 75rem;
            text-align: right; 
            font-size: 1.8rem;
        }
        @media (max-width: ${maxCol.md}) {
            margin-right: 0;
        }
    } 
    .flex-row-reverse .left {
        justify-content: end;
    }
    
    @media (min-width: ${minCol.sm}) {
        .row > * {
            padding-right: 2.5rem; 
            padding-left: 2.5rem;
        }
    }
    @media (max-width: ${maxCol.sm}) {
        img {
            width: 100%;
        }
        .section-box > .row {
               flex-direction: column-reverse !important;
        }
    }
`