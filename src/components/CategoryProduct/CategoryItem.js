import React from 'react';
import styled from "styled-components";
import {minCol, maxCol} from "../../function/SizeCol";
import {Link} from 'gatsby';

const CategoryItem = ({item, step}) => {
    //console.log('CategoryBox item >>', itemt);
    const ImageBG = styled.div`
        background-image: url(${ item.ACFcategory.banner.localFile.publicURL });
        @media(max-width: ${maxCol.md}) { 
            background-image: url(${ item.ACFcategory.bannerMobile.localFile.publicURL });
        }
    `;
    // props.theme.pageContext.OrderSortCategory.filterSort
    return (
        <Link style={{order: item.OrderSortCategory.filterSort}} to={item.uri} className="CategoryItem">
            <ImageBG className="ImageBG grey anim" />
            <div className="container">
                <div className="box">
                    <div className="step">
                        {
                            item.OrderSortCategory.filterSort === null ? (
                                step < 10 ? ( `0${step}` ) : (`${step}`)
                            ) : (
                                item.OrderSortCategory.filterSort
                            )
                        } collection

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