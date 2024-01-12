import React, {useState} from 'react';
import LoadFooter from "./LoadFooter";
import { useScrollPosition } from '../../function/useScrollPosition';
import TidioScript from './TidioScript'

const Footer = () => {

    const [ firstScroll, firstSetScroll ] = useState(false);
    const [scroll, setScroll] = useState(0);

    useScrollPosition(function setScrollPosition ({ currentPosition }) {
        setScroll(currentPosition.y);
        if (firstScroll === false) {
            firstSetScroll(!firstScroll)
        }
    });

    //console.log('>>>', firstScroll ? 'LoadFooter' :' not LoadFooter' )
    return (
        <>
            {firstScroll ? <LoadFooter /> : <footer className="footer-clone" style={{minHeight: '50rem'}} />  }
            <TidioScript />
        </>
    )
};

export default Footer;