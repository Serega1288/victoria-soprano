import React from 'react';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";
// import lozad from "lozad";

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const Instagram = ( { item } ) => {

    const bgImage1 = convertToBgImage(getImage(item.image1.localFile.childImageSharp))
    const bgImage2 = convertToBgImage(getImage(item.image2.localFile.childImageSharp))

    // console.log('bgImage1 >>>', bgImage1);

    // const { observe } = lozad("[data-use-lozad]", {
    //     rootMargin: '100px 0px', // syntax similar to that of CSS Margin
    //     threshold: 0.1, // ratio of element convergence
    //     loaded: el => {
    //         el.classList.add("fade");
    //     }
    // });
    //
    // const { observe } = lozad();
    //
    // useEffect(() => {
    //     observe();
    // }, [observe]);

    //console.log('Instagram >>>', item);
    const Section = styled.section`
        .image1, .image2 {
            padding-top: 150%;
            background-size: cover;
            background-position: center center;
            @media (max-width: ${maxCol.sm}) {
                padding-top: 208%;
            }
        }
        .image1:hover, .image1:focus {
            filter: none;
        }
        .image2 {
            @media (max-width: ${maxCol.sm}) {
                padding-top: 528%;
            }
        }
        .section-box {
            padding-bottom: 3.6rem;
            border-bottom: 1px solid #000;
        }
        .Title1 {
            color: #1a0f07;
            font-size: 1.8rem;
            line-height: 2.6rem;
            margin-bottom: 2.5rem;
            @media (max-width: ${maxCol.sm}) {
                font-size: 1.1rem;
                line-height: 1.6rem;
                margin-bottom: 1rem;
            }
        }
        .Title2 {
            color: #86644b;
            font-family: 'Bolkit';
            font-size: 11.4rem;
            font-weight: 700;
            line-height: 1;
            @media (max-width: ${maxCol.md}) {
                font-size: 7.5rem;
            }
            @media (max-width: ${maxCol.sm}) {
                margin-bottom: 1.4rem;
            }
        }
        .ChannelName, .Title3 {
            color: #1a0f07;
            font-size: 3rem;
            text-transform: uppercase;
            line-height: 4.3rem;
        }
        
        .Title3 {
            font-weight: 400;
            @media (max-width: ${maxCol.sm}) {
                font-size: 1.8rem;
                line-height: 2.4rem;
            }
        }
        .ChannelName {
            font-weight: 600;
            @media (max-width: ${maxCol.sm}) {
                font-size: 1.8rem;
                line-height: 1.2;
            }
        }
        
        
        .BoxLeft {
            padding-bottom: 5rem;
             max-width: 50rem;
             @media (max-width: ${maxCol.md}) {
                max-width: 30rem;
             }
            
            @media (max-width: ${maxCol.sm}) {
                 height: auto;
                 padding-bottom: 0;
                 .imgDiv {
                    min-width: 36rem;
                    margin-right: 0rem;
                 }
            }
        } 
        a {
            text-decoration: none;
            &:hover, &:focus {
                div {
                    color: #86644b;
                }
            }
            @media (max-width: ${maxCol.sm}) {
                 margin-bottom: 3rem;
                 //display: block;
            }
        }
        .BoxRight { 
             .img {
                margin-top: 14rem;
                margin-bottom: 2rem;
                @media (max-width: ${maxCol.sm}) {
                    margin-top: 12.8rem;
                    margin-bottom: 0rem;
                    .imgDiv {
                        min-width: 44.2rem;
                        margin-left: -13rem;
                    }
                }
            }  
        }
    `;
    return (
        <Section className="instagram section">
            <div className="container box-title">
                <h2 className="block-title">
                    {item.blockTitle0}
                </h2>
            </div>
            <div className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-block d-sm-none">
                            <div className="Title1">
                                {item.blockTitle1}
                            </div>
                            <div className="Title2">
                                {item.blockTitle2}
                            </div>
                            <a className="d-block" target="_blank" href={item.channelurl}>
                                <div className="Title3">
                                    {item.blockTitle3}
                                </div>
                                <div className="ChannelName">
                                    {item.channelname}
                                </div>
                            </a>
                        </div>
                        <div className="col-8 col-sm-5 col-md-6 d-flex flex-column pos z-in-1">
                            <div className="d-none d-sm-block">
                                <div className="Title1">
                                    {item.blockTitle1}
                                </div>
                                <div className="Title2">
                                    {item.blockTitle2}
                                </div>
                            </div>
                            <div className="BoxLeft d-flex align-items-end justify-content-end justify-content-sm-center h100 ">
                                <div className="img w100 d-sm-block d-flex justify-content-end">
                                    {/*<img className="image1" src={item.image1.localFile.publicURL} alt=""/>*/}

                                    <BackgroundImage
                                        className="image1 imgDiv grey"
                                        Tag="div"
                                        // Spread bgImage into BackgroundImage:
                                        {...bgImage1}
                                        preserveStackingContext
                                    />

                                    {/*<div*/}
                                    {/*    className="anim image1 lozad imgDiv grey fade"*/}
                                    {/*    data-use-lozad*/}
                                    {/*    // data-background-image={item.image1.localFile.publicURL}*/}
                                    {/*    style={{*/}
                                    {/*        backgroundImage: `url(${item.image1.localFile.publicURL})`*/}
                                    {/*    }}*/}

                                    {/*/>*/}

                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-sm-7 col-md-6">
                            <div className="BoxRight">
                                <div className="img">
                                    {/*<img className="image2" src={item.image2.localFile.publicURL} alt=""/>*/}

                                    <BackgroundImage
                                        className="image2 imgDiv grey"
                                        Tag="div"
                                        // Spread bgImage into BackgroundImage:
                                        {...bgImage2}
                                        preserveStackingContext
                                    />

                                    {/*<div*/}
                                    {/*    className="anim image2 lozad imgDiv  fade"*/}
                                    {/*    data-use-lozad*/}
                                    {/*    // data-background-image={item.image2.localFile.publicURL}*/}
                                    {/*    style={{*/}
                                    {/*        backgroundImage: `url(${item.image2.localFile.publicURL})`*/}
                                    {/*    }}*/}
                                    {/*/>*/}

                                </div>
                                <a className="d-none d-sm-block" target="_blank" href={item.channelurl}>
                                    <div className="Title3">
                                        {item.blockTitle3}
                                    </div>
                                    <div className="ChannelName">
                                        {item.channelname}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    );
};
export default Instagram;