import React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import iconWois from '../../assets/img/whatsapp.png';
import CollapsListAttribute from "../Products/CollapsListAttribute";
//import { Meseger } from '../header/Meseger';

const BoxProductDesc = ({item}) => {
    //console.log('BoxProductDesc >>>', item);

    const data = useStaticQuery(graphql` 
        {
            wp {
                themeGeneralSettings {
                  ACFoptionThemes {
                    sizeguide {
                      ... on WpPage {
                        id
                        uri
                      }
                    }
                  }
                }
              } 
        }
    `);

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
                    <Link className="a" to={data.wp.themeGeneralSettings.ACFoptionThemes.sizeguide.uri}>
                        <span>Size Guide</span>
                    </Link>
                    <div className="a">
                        <img src={iconWois} alt=""/>
                        <span>Contact us</span>
                    </div>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between box-desc-2">
                    <Link className='btn style-3' to={'/'}>Where to buy</Link>
                    <Link className='btn style-3' to={'/'}>Partnership</Link>
                </div>
            </div>

            { item.ACFBox.specifications && (
                    <CollapsListAttribute item={item.ACFBox.specifications} />
                )
            }

        </>
    );
}
export default BoxProductDesc;