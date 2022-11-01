import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import lozad from "lozad";

const Collections = ( {item} ) => {
    //console.log('item >>>', item);


    const { observe } = lozad("[data-use-lozad]", {
        rootMargin: '100px 0px', // syntax similar to that of CSS Margin
        threshold: 0.1, // ratio of element convergence
        loaded: el => {
            el.classList.add("fade");
        }
    });

    useEffect(() => {
        observe();
    }, [observe]);


    return (
        <div className="collection-item">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="box d-flex flex-column-reverse flex-sm-column">
                            <div>
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="text">
                                    {item.text}
                                </div>
                                <Link className="btn style-2" to={item.collectionUrl}> View </Link>
                            </div>
                            <div className="WrapImg">
                                {/*<ImageBG_1 className="anim ImageBG first" />*/}
                                <div
                                    className="anim ImageBG first lozad"
                                    data-use-lozad
                                    data-background-image={item.img1.localFile.publicURL}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-ImageBG d-none d-sm-block">
                {/*<ImageBG_2 className="anim ImageBG" />*/}
                <div
                    className="anim ImageBG lozad"
                    data-use-lozad
                    data-background-image={item.img2.localFile.publicURL}/>
            </div>
        </div>

    )
};

export default Collections;



