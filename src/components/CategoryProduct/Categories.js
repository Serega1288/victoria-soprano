import React from 'react';
import CategoryTitle from "../CategoryProduct/CatTitleBlock";
import CategoryBox from './CategoryBox.js';

const Categories = (props) => {
    // console.log('categories page >>', props.theme.pageContext );
    return (
        <>
            <CategoryTitle item={props.theme.pageContext.name} breadcrumb={props} />
            <CategoryBox item={props.theme.pageContext.wpChildren.nodes} />
        </>
    )
}
export default Categories;


