import React from 'react';
import { Link } from "gatsby";
import iconWois from '../../assets/img/whatsapp.png';
import CollapsListAttribute from "../Products/CollapsListAttribute";


const BoxProductDesc = ({item}) => {
    //console.log('BoxProductDesc >>>', item);
    return (
        <>
            { item.content && (
                 <>
                     <div className="sub-title">
                         About dress
                     </div>
                     <div className="text" dangerouslySetInnerHTML={ {__html: item.content} } />
                 </>
            )}

            <div className="box-not-login">
                <div className="d-flex align-items-center box-desc-1">
                    <Link className="a" to={'/'}>
                        <span>Size Guide</span>
                    </Link>
                    <div className="a">
                        <img src={iconWois} alt=""/>
                        <span>Contact us</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between box-desc-2">
                    <Link className='btn style-3' to={'/'}>Where to buy</Link>
                    <Link className='btn style-3' to={'/'}>Partnership</Link>
                </div>
            </div>


            <CollapsListAttribute />

        </>
    );
}
export default BoxProductDesc;