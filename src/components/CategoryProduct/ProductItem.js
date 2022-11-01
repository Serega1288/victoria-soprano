import React from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {maxCol} from "../../function/SizeCol";

const ProductItem = ({item}) => {
   // console.log('ListProduct >>', item );
    const ImageBG = styled.div`
        background-image: url(${ item?.featuredImage?.node.localFile?.publicURL });
    `;
    return (
        <Link to={item.uri}>
            <ImageBG className="ImageBG" />
            <h3 className="ProductItemTitle">
                {item.title}
            </h3>
        </Link>
    )
}
export default ProductItem;
