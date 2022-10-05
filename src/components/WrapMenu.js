import React from 'react';
import MenuTop from '../components/MenuTop';

const WrapMenu = ({ open, first }) => {
    return (
        <div className={'WrapMenu ' + (open ? ' open' : '')} >
            {(open ? <MenuTop /> : (first === true ? <MenuTop /> : ''  ) )}
        </div>
    );
}
export default WrapMenu;





