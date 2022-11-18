import React from 'react';
import ConstItem from './Const_Item';

const Const = ( props ) => {
    //console.log('>>!!', props.href );
    return (
        <>
            {props?.props?.map( (item, index) => (
                <ConstItem type={props.type} href={props.href} key={index} item={item}  />
            ))}
        </>
    )
};
export default Const;


