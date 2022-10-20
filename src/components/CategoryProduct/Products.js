import React from 'react';
import BannerProductCat from './BannerProductCat';

const Products = (props) => {
    //console.log('Products >>', props );
    return (
        <>
            <BannerProductCat item={props.theme.pageContext} />
        </>
    )
}
export default Products;