import React from 'react';
import {Link} from "gatsby";

import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

function BlogSearchResultItem({ product }) {

    const image = getImage(product.img)
    const bgImage = convertToBgImage(image)

    // console.log('product', product)
    return (
        <>
            <Link className="ResultItem" to={product.uri}>
                <BackgroundImage
                    className="ImageBG"
                    Tag="div"
                    // Spread bgImage into BackgroundImage:
                    {...bgImage}
                    preserveStackingContext
                />

                <h3 className="ProductItemTitle">
                    {product.title}
                </h3>
            </Link>
        </>
    );
}
export {
    BlogSearchResultItem
};

