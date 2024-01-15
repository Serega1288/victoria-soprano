import React from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import Save from '../../function/Save'
const ProductItem = ({item}) => {
   console.log('ListProduct >>', item );
   //  const ImageBG = styled.div`
   //      background-image: url(${ item?.featuredImage?.node.localFile?.publicURL });
   //  `;

    const image = getImage(item?.featuredImage?.node.localFile.childImageSharp)
    const bgImage = convertToBgImage(image)

    return (
        <div className="product">
            <div className='wrapLink'>
                <Save product={item} />
                <Link to={item.uri}>
                    <BackgroundImage
                        className="ImageBG"
                        Tag="div"
                        // Spread bgImage into BackgroundImage:
                        {...bgImage}
                        preserveStackingContext
                    />
                </Link>
            </div>
            <Link to={item.uri}>
                <h3 className="ProductItemTitle">
                    {item.title}
                </h3>
            </Link>
        </div>
    )
}
export default ProductItem;
