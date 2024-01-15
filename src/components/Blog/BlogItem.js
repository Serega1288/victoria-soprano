import React from 'react';
import {Link} from "gatsby";
import styled from "styled-components";
import {minCol} from "../../function/SizeCol";

const  item = ({post, step}) => {
    console.log('post >> ', post);
    const img = post.ACFImage.image.localFile.publicURL;
    const ImageBG = styled.div`  
        background-size: cover;
        background-image: url(${img});
    `;
    // ${step === 0 ? 'col-sm-8' : '' }
    return (
            <Link className={`blog-item ${step === 0 ? 'col-sm-12' : '' }`} to={`/blog/${post.slug}`}>
                <ImageBG className="blog-img" />
                <h2 className="blog-item-title text-center">{post.title}</h2>
            </Link>
    )
};

export default item;