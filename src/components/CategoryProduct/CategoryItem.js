import React from 'react';
import styled from "styled-components";
import {minCol, maxCol} from "../../function/SizeCol";
import {Link} from 'gatsby';

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import {convertToBgImage} from "gbimage-bridge";

const CategoryItem = ({item, step}) => {
    //console.log('CategoryBox item >>', itemt);

    const imgUrl = convertToBgImage(getImage(item.ACFcategory.banner.localFile.childImageSharp));
    const imgUrlMobile = convertToBgImage(getImage(item.ACFcategory.bannerMobile.localFile.childImageSharp));

    // const ImageBG = styled.div`
    //     background-image: url(${ item.ACFcategory.banner.localFile.publicURL });
    //     @media(max-width: ${maxCol.md}) {
    //         background-image: url(${ item.ACFcategory.bannerMobile.localFile.publicURL });
    //     }
    // `;

    const sources = [
        imgUrlMobile.fluid,
        {
            ...imgUrl.fluid,
            media: `(min-width: ${minCol.md})`,
        },
    ]

    // props.theme.pageContext.OrderSortCategory.filterSort
    return (
        <Link style={{order: item.OrderSortCategory.filterSort}} to={item.uri} className="CategoryItem">

            {/*<ImageBG className="ImageBG grey anim" />*/}

            <BackgroundImage style={{
                // Defaults are overwrite-able by setting one or each of the following:
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
            }} className="ImageBG grey anim" fluid={sources}>
            </BackgroundImage>

            <div className="container">
                <div className="box">
                    <div className="step">
                        <span>
                            {
                                item.OrderSortCategory.filterSort === null ? (
                                    step < 10 ? ( `0${step}` ) : (`${step}`)
                                ) : (
                                    item.OrderSortCategory.filterSort
                                )
                            }
                        </span> collection
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