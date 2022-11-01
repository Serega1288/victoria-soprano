import React from 'react';
import BannerProductCat from './BannerProductCat';
import CategoryDesc from "./CategoriesDesc";
import ListProduct from "./CategoryListProduct"

const Products = (props) => {
    //console.log('Products >>', props );
    return (
        <>
            <BannerProductCat item={props.theme.pageContext} />
            <CategoryDesc item={props.theme.pageContext} />
            <ListProduct item={props.theme.pageContext.products.nodes} />
        </>
    )
}
export default Products;