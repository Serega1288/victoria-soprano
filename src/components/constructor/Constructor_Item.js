import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Collections = ( {item} ) => {
    //console.log('item >>>', item);

    const ImageBG = styled.div`
        background-image: url(${ item.img2.localFile.publicURL });
    `;

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
                                <img className="anim" src={item.img1.localFile.publicURL}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-ImageBG d-none d-sm-block">
                <ImageBG className="anim ImageBG" />
            </div>
        </div>

    )
};

export default Collections;



