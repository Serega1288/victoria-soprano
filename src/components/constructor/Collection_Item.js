import React from 'react';
import {Link} from 'gatsby';


import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const Collections = ( {item} ) => {

    //console.log('item >>>', item);

    const bgImage1 = convertToBgImage(getImage(item?.img1?.localFile.childImageSharp))
    const bgImage2 = convertToBgImage(getImage(item?.img2?.localFile.childImageSharp))

    return (
        <div className="collection-item">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="pos box d-flex flex-column-reverse flex-sm-column">
                            <Link to={item.collectionUrl} className="WrapText">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="text">
                                    {item.text}
                                </div>
                                <span className="anim btn style-2"> View </span>
                            </Link>
                            <Link to={item.collectionUrl} className="WrapImg">
                                {/*<ImageBG_1 className="anim ImageBG first" />*/}
                                <BackgroundImage
                                    className="ImageBG first"
                                    Tag="div"
                                    // Spread bgImage into BackgroundImage:
                                    {...bgImage1}
                                    preserveStackingContext
                                />
                                {/*<div*/}
                                {/*    className="anim ImageBG first lozad fade"*/}
                                {/*    data-use-lozad*/}
                                {/*    style={{*/}
                                {/*        backgroundImage: `url(${item.img1.localFile.publicURL})`*/}
                                {/*    }}*/}

                                {/*/>*/}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-ImageBG d-none d-sm-block">
                {/*<ImageBG_2 className="anim ImageBG" />*/}
                <BackgroundImage
                    className="ImageBG"
                    Tag="div"
                    // Spread bgImage into BackgroundImage:
                    {...bgImage2}
                    preserveStackingContext
                />
                {/*<div*/}
                {/*    className="anim ImageBG lozad fade"*/}
                {/*    data-use-lozad*/}
                {/*    style={{*/}
                {/*        backgroundImage: `url(${item.img2.localFile.publicURL})`*/}
                {/*    }}*/}
                {/*     />*/}
            </div>
        </div>

    )
};

export default Collections;



