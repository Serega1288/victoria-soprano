import React from "react";
import {graphql, useStaticQuery} from "gatsby";

const IconList = () => {

    const data = useStaticQuery(graphql`  
        {
            wp {
                themeGeneralSettings {
                    ACFoptionThemes {
                        footerIconList {
                            url
                            icon {
                                localFile {
                                    publicURL
                                }
                                width
                                height
                            }
                        }
                    }
                }
            }
        }
    `);

    const list = data.wp.themeGeneralSettings.ACFoptionThemes.footerIconList;
    return (
        <ul className="icons ul-clear d-flex align-items-center justify-content-center justify-content-sm-start">
            {list.map( (item, index) => {
                return (
                <li key={ index + 1 } >
                    <a className="anim d-flex align-items-center justify-content-center" target="_blank" href={item.url} >
                        <img
                            className="anim"
                            height={item.icon?.height}
                            width={item.icon?.width}
                            src={item.icon?.localFile.publicURL}
                        />
                    </a>
                </li>
            )})}
        </ul>
    )
};
export default IconList;

