import {Link} from "gatsby";
import React from "react";

const FooterMenuUL = ({menu}) => {
    return (
        <>
           <ul className="ul-clear box-menu-ul">
               {menu.map(item => (
                   <li key={item.id} className={ item.childItems && item.childItems.length > 0 ? 'parents' : '' } >
                       <Link to={item.path} >{item.label}</Link>
                       { item.childItems && item.childItems.length > 0 ? (
                           <>
                               <ul className="submenu ul-clear">
                                   {item.childItems.map(li => (
                                       <li key={li.id}>
                                           <Link  to={li.path}>{li.label}</Link>
                                       </li>
                                   ) )}
                               </ul>
                           </>
                       ) : null }
                   </li>

               ))
               }
           </ul>
        </>

    )
};
export default FooterMenuUL;
