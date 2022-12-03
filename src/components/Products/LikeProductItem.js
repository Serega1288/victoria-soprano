import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import {minCol} from "../../function/SizeCol";

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import {convertToBgImage} from "gbimage-bridge";

const LikeProductItem = ({item}) => {
    console.log('categoryItem', item.featuredImage);

    const imgUrl = convertToBgImage(getImage(item.featuredImage.node.localFile.childImageSharp));
    const imgUrlMobile = convertToBgImage(getImage(item.featuredImage.node.localFile.childImageSharp));

    // const ImageBG = styled.div`
    //     background-size: cover;
    //     background-image: url(${ item.featuredImage.node.localFile.publicURL });
    //     @media(min-width: ${minCol.md}) {
    //           background-image: url(${ item.featuredImage.node.localFile.publicURL });
    //     }
    // `;

    const sources = [
        imgUrlMobile.fluid,
        {
            ...imgUrl.fluid,
            media: `(min-width: ${minCol.md})`,
        },
    ]

    return (
        <Link to={item.uri} className="categoryItem">
                <BackgroundImage style={{
                    // Defaults are overwrite-able by setting one or each of the following:
                    backgroundRepeat: 'no-repeat',
                }} className="ImageBG 11111" fluid={sources}>
                </BackgroundImage>

        </Link>
    )
}
export default LikeProductItem;
