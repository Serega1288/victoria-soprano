import React from 'react';
import styled from "styled-components";
import {minCol, maxCol} from "../../function/SizeCol";
import {Link} from 'gatsby';

const CategoryItem = ({item, step}) => {
    const ImageBG = styled.div`
        background-image: url(${ item.ACFcategory.banner.localFile.publicURL });
        @media(max-width: ${maxCol.md}) { 
            background-image: url(${ item.ACFcategory.bannerMobile.localFile.publicURL });
        }
    `;
    return (
        <Link to={item.uri} className="CategoryItem">
            <ImageBG className="ImageBG grey anim" />
            <div className="container">
                <div className="box">
                    <div className="step">
                        { step < 10 ? ( `0${step}` ) : (`${step}`)  } collection
                    </div>
                    <h2 className="CategoryTitle">
                        {item.name}
                    </h2>
                </div>
            </div>
        </Link>
    )
}
export default CategoryItem;