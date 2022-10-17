import React from 'react';
import ConstItem from './Const_Item';

const Const = ( props ) => {
    //console.log('>>', props.props );
    return (
        <>
            {props?.props?.map( (item, index) => (
                <ConstItem key={index} item={item}  />
            ))}
        </>
    )
};
export default Const;


