import React from 'react';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

const BannerProductCat = ({item}) => {
    //console.log('BannerProdCar >>', item );

    const ImageBG = styled.div`
        background-image: url(${ item.ACFcategory.banner.localFile.publicURL });
        @media(max-width: ${maxCol.md}) { 
            background-image: url(${ item.ACFcategory.bannerMobile.localFile.publicURL });
        }
    `;

    return (
        <Section className="BannerProductCat">
            <ImageBG className="ImageBG" />
            <div className="container d-flex justify-content-center align-content-center flex-column">
                <h1 className="title">{item.name}</h1>
            </div>
        </Section>
    )
}
export default BannerProductCat;


const Section = styled.section`
        position: relative;
        text-align: center;
        h1 {
            margin: 15rem 0 1rem;
        }
        .container {
            position: absolute;
            top:0;
            bottom:0;
            left: 0;
            right: 0;
            z-index: 2;
        }
        .title {
            font-size: 15.4rem;
            font-weight: 700;
            @media (max-width: ${maxCol.sm}) {
                font-size: 5.3rem;
            }
        }
        .ImageBG {
            width: 50rem;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
            margin-left: auto;
            margin-right: auto;
            border-top-left-radius: 50rem;
            border-top-right-radius: 50rem;
            border: 1px solid #000000;
            background-size: cover;
            background-position: center center;
             
            height: calc(100vh - 13.4rem - 5rem ); 
            @media (max-width: ${maxCol.lg}) {
                height: calc( 60vh - 8.8rem - 5rem );
            }
            @media (max-width: ${maxCol.sm}) {
                height: calc( 100vh - 8.8rem - 5rem );
                width: calc(100% - 3.2rem );
                margin-left: 1.6rem;
                max-width: 34rem;
            }
        }
`;
