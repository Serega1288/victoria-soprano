import React from 'react'
import styled from "styled-components"
import {minCol, maxCol} from '../../function/SizeCol'

const Editor = ( { item } ) => {
    console.log('Contact data >>>', item)
    return (
        <Section className="boxBackground">
            <div className="container h100">
                <div className="ContactData h100">
                    <div className="row h100">
                        <div className="col-12 col-sm-6">
                            <div className="img"
                                 style={{
                                     backgroundImage: `url(${item.image.localFile.publicURL})`
                                 }}
                            ></div>
                        </div>
                        <div className="col-12 col-sm-6 d-flex align-items-sm-center justify-content-sm-center">
                            <div className="box-text w100">
                                <h1 className="title">
                                    {item.title}
                                </h1>

                                    {item.contacts.map(item => (
                                    <div className="row list-item">
                                        <div className="col-5 col-sm-6 name">
                                            {item.name}
                                        </div>
                                        <div className="col-7 col-sm-6 value">
                                            <a className={item.typ} target={
                                                `
                                                ${item.typ === 'url' && (`_blank`)}
                                                ${item.typ === 'email' && (`_self`)}
                                                ${item.typ === 'phone' && (`_self`)}
                                                ${item.typ === 'messengers' && (`_self`)}  
                                                `
                                            } href={`
                                                ${item.typ === 'url' && (item.value)}
                                                ${item.typ === 'email' && (`mailto:` + item.value)}
                                                ${item.typ === 'phone' && (`tel:` + item.value)}
                                                ${item.typ === 'messengers' && (item.value)}  
                                                `}>
                                                {item.title}
                                            </a>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Editor;

const Section = styled.section`
    a {
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #1a0f07;
        &:hover {
            color: #86644b; 
            border-bottom: 1px solid #86644b;
        }
    }
    .name {
        font-weight: 600;
    }
    .value, .name {
        color: #000;
        line-height: 1;
        @media(max-width: ${maxCol.sm}) {
            font-size: 1.6rem;
        }
    }
    .list-item {
        margin-bottom: 2.5rem;
        @media(max-width: ${maxCol.sm}) {
            margin-bottom: 1.5rem;
        }
    }
    .box-text {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        @media(min-width: ${minCol.sm}) {
            padding-left: 6rem;
            padding-right: 6rem;
        }
        @media(max-width: ${maxCol.sm}) {
            border-top: 1px solid #1A0F07;
        }
    }
    .title {
        font-size: 6.8rem;
        line-height: 6.9rem;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 5rem;
        @media(max-width: ${maxCol.sm}) {
            font-size: 3.4rem;
            padding-top: 2.4rem;
            line-height: 1;
            text-align: center;
            margin-bottom: 2.5rem;
        }
    }
    .img {
        padding-top: 120%;
        background-size: cover;
        background-position: center center;
        margin-right: 5.5rem;
        margin-bottom: 6.7rem;
        @media(max-width: ${maxCol.sm}) {
            margin-right: 1rem;
            margin-left: 1rem;
            margin-bottom: 1rem; 
            padding-top: 182%;
        }
    }
    // min-height: calc(100vh - 8.8rem); 
    // @media(min-width: ${minCol.sm}) {   
    //     min-height: calc(100vh - 13.4rem);
    // } 
    .ContactData {
        border: 1px solid #1A0F07;
    }
    .text {
          
    }
    .ContactData > .row > div:first-child {
        border-right: 1px solid #1A0F07;
        @media(max-width: ${maxCol.sm}) {
            border: none;
        }
    }

`;

