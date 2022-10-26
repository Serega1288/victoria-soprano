import React from 'react';
import styled from 'styled-components';
import {minCol, maxCol} from "../../function/SizeCol";


const Banner = ( {item} ) => {
    //console.log('item >>>', item);

    const imgUrl = item.banner.localFile.publicURL;
    const imgUrlMobile = item.bannerMobile.localFile.publicURL;

    const Section = styled.section`
        height: calc(100vh - 8.8rem); 
        background-image: url(${ imgUrlMobile });
        background-size: cover;
        background-position: top center;
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

    return (
        <Section className="banner d-flex justify-content-center align-items-center">
            <h1 className="container BannerTitle">
                {item.title}
            </h1>
        </Section>
    )
};

export default Banner;



