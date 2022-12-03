import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {minCol, maxCol} from "../../function/SizeCol";

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import {convertToBgImage} from "gbimage-bridge";

const Banner = ( {item} ) => {
    //console.log('item >>>', item);


    const imgUrl = convertToBgImage(getImage(item.banner.localFile.childImageSharp));
    const imgUrlMobile = convertToBgImage(getImage(item.bannerMobile.localFile.childImageSharp));



    const Section = styled.section`
        height: calc(100vh - 8.8rem); 
        
        background-size: cover;
        background-position: top center;
        .boxImg {
            position: absolute !important;
            top:0;
            bottom:0;
            left: 0;
            right: 0;
            z-index: -1;
        }
        .BoxBtn {
            margin-top: 2rem;
            margin-bottom: 2rem;
            a {
                margin: 1rem;
            }
        }
        .BannerTitle {
            color: #ffe4d0;
            font-weight: 400;
            margin: 0;
            font-size: 6rem;
            @media(max-width: ${maxCol.sm}) {
                font-size: 4.5rem; 
            }
            line-height: normal;
            text-align: center;
        }
        @media(min-width: ${minCol.sm}) {   
            
            height: calc(100vh - 13.4rem);
            background-position: top left;
            .BannerTitle {
                font-size: 11.4rem;
            } 
        } 
    `;
    const [active, setActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(!active)
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const sources = [
        imgUrlMobile.fluid,
        {
            ...imgUrl.fluid,
            media: `(min-width: 600px)`,
        },
    ]

    console.log('sources >>>', sources);

    return (
        <>
            <div className={`${ active ? ' active-block ' : '' } status-anim`}></div>
            <Section style={{opacity: 0}} className={`anim banner d-flex justify-content-center align-items-center flex-column`}>
                <h1 className="container BannerTitle">
                    {item.title}
                </h1>
                {/*<p className="BoxBtn d-block d-md-flex align-items-center justify-content-center ">*/}
                {/*    <Link className="btn style-4" to="/collection/victoria-soprano/">Victoria Soprano Collection</Link>*/}
                {/*    /!*<Link className="btn style-4" to="/collection/katherine-joyce/">Katherine Joyce Collection</Link>*!/*/}
                {/*</p>*/}
                <BackgroundImage style={{
                    // Defaults are overwrite-able by setting one or each of the following:
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                }} className="boxImg" fluid={sources}>
                </BackgroundImage>
            </Section>
        </>
    )
};

export default Banner;



