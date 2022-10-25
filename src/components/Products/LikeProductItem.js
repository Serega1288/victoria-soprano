import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import {minCol} from "../../function/SizeCol";

const LikeProductItem = ({item}) => {
    console.log('categoryItem', item.featuredImage);

    const ImageBG = styled.div`  
        background-size: cover;
        background-image: url(${ item.featuredImage.node.localFile.publicURL });
        @media(min-width: ${minCol.md}) {  
              background-image: url(${ item.featuredImage.node.localFile.publicURL });
        } 
    `;

    return (
        <Link to={item.uri} className="categoryItem">
            <ImageBG className="ImageBG" />
        </Link>
    )
}
export default LikeProductItem;
