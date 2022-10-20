import React from 'react';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

const BannerProductCat = ({item}) => {
    console.log('BannerProdCar >>', item );

    const ImageBG = styled.div`
        background-image: url(${ item.ACFcategory.banner.localFile.publicURL });
        @media(max-width: ${maxCol.md}) { 
            background-image: url(${ item.ACFcategory.bannerMobile.localFile.publicURL });
        }
    `;

    return (
        <Section className="BannerProductCat">
            <ImageBG class="ImageBG" />
            <div className="container">
                <h1>{item.name}</h1>
            </div>
        </Section>
    )
}
export default BannerProductCat;


const Section = styled.section`
        .ImageBG {
             min-height: calc(100vh - 13.4rem ); 
            @media (max-width: ${maxCol.sm}) {
                min-height: calc(100vh - 8.8rem );
            }
        }
`;
