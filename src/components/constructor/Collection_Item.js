import React from 'react';
import {Link} from 'gatsby';

// import lozad from "lozad";

const Collections = ( {item} ) => {
    //console.log('item >>>', item);


    // const { observe } = lozad("[data-use-lozad]", {
    //     rootMargin: '100px 0px', // syntax similar to that of CSS Margin
    //     threshold: 0.1, // ratio of element convergence
    //     loaded: el => {
    //         el.classList.add("fade");
    //     }
    // });
    //
    // useEffect(() => {
    //     observe();
    // }, [observe]);

    // const [ firstScroll, firstSetScroll ] = useState(false);
    // const [scroll, setScroll] = useState(0);
    //
    // useScrollPosition(function setScrollPosition ({ currentPosition }) {
    //     setScroll(currentPosition.y);
    //     if (firstScroll === false) {
    //         firstSetScroll(!firstScroll)
    //     }
    // });


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
                                <div
                                    className="anim ImageBG first lozad fade"
                                    data-use-lozad
                                    style={{
                                        backgroundImage: `url(${item.img1.localFile.publicURL})`
                                    }}
                                    data-background-image={item.img1.localFile.publicURL}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-ImageBG d-none d-sm-block">
                {/*<ImageBG_2 className="anim ImageBG" />*/}
                <div
                    className="anim ImageBG lozad fade"
                    data-use-lozad
                    style={{
                        backgroundImage: `url(${item.img2.localFile.publicURL})`
                    }}
                    data-background-image={item.img2.localFile.publicURL}/>
            </div>
        </div>

    )
};

export default Collections;



