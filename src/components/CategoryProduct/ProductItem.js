import React from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const ProductItem = ({item}) => {
   //console.log('ListProduct >>', item?.featuredImage?.node.localFile.childImageSharp );
   //  const ImageBG = styled.div`
   //      background-image: url(${ item?.featuredImage?.node.localFile?.publicURL });
   //  `;

    const image = getImage(item?.featuredImage?.node.localFile.childImageSharp)
    const bgImage = convertToBgImage(image)

    return (
        <Link to={item.uri}>
            {/*<ImageBG className="ImageBG" />*/}

            <BackgroundImage
                className="ImageBG"
                Tag="div"
                // Spread bgImage into BackgroundImage:
                {...bgImage}
                preserveStackingContext
            />

            {/*<BackgroundImage*/}
            {/*    Tag={`section`}*/}
            {/*    id={`media-test`}*/}
            {/*    className="ImageBG"*/}
            {/*    fluid={sources}*/}
            {/*/>*/}

            <h3 className="ProductItemTitle">
                {item.title}
            </h3>
        </Link>
    )
}
export default ProductItem;
