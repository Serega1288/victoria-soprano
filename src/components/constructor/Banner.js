import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {minCol} from "../../function/SizeCol";
import {Link} from "gatsby";

const Banner = ( {item} ) => {
    //console.log('item >>>', item);

    const imgUrl = item.banner.localFile.publicURL;
    const imgUrlMobile = item.bannerMobile.localFile.publicURL;

    const Section = styled.section`
        height: calc(100vh - 8.8rem); 
        background-image: url(${ imgUrlMobile });
        background-size: cover;
        background-position: top center;
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
            line-height: normal;
            text-align: center;
        }
        @media(min-width: ${minCol.sm}) {   
            background-image: url(${ imgUrl }); 
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

    return (
        <>
            <div className={`${ active ? ' active-block ' : '' } status-anim`}></div>
            <Section style={{opacity: 0}} className={`anim banner d-flex justify-content-center align-items-center flex-column`}>
                <h1 className="container BannerTitle">
                    {item.title}
                </h1>
                <p className="BoxBtn d-block d-md-flex align-items-center justify-content-center ">
                    <Link className="btn style-4" href="/product-category/victoria-soprano/">Victoria Soprano Collection</Link>
                    <Link className="btn style-4" href="/product-category/katherine-joyce/">Katherine Joyce Collection</Link>
                </p>
            </Section>
        </>
    )
};

export default Banner;



