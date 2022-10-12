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
                            }
                        }
                    }
                }
            }
        }
    `);

    const list = data.wp.themeGeneralSettings.ACFoptionThemes.footerIconList;
    return (
        <ul className="icons ul-clear d-flex">
            {list.map( item => (
                <li key={ item.icon.id } >
                    <a target="_blank" href={item.url} >
                        <img
                            height={item.icon.height}
                            width={item.icon.width}
                            src={item.icon.localFile.publicURL}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
};
export default IconList;

