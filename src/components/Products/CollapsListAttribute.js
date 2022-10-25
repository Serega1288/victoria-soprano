import React, {useState} from "react";
import useCollapse from "react-collapsed";


const CollapsList = ({item}) => {
    //console.log('col attr >>>', item);

    const [isExpanded, setExpanded] = useState( true );
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div className="CollapsList-product-attribute">
            <div
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
                className={`CollapsList-title ${isExpanded ? 'active' : ''}`}
            >
                <span>Specifications</span>
                <svg className="anim" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12">
                    <g><g><path d="M3.5.8L10 7.3 16.5.8l2.6 1.3-9.1 9.1L.9 2.1z"/></g></g>
                </svg>
            </div>
            <div  {...getCollapseProps()}>
                <div className="CollapsList-text">
                    {/*<div className="subTitle">{item.subTitle}</div>*/}
                    {/*<div className="editor" dangerouslySetInnerHTML={{__html: item.editor}} />*/}

                    {
                        item.map( (item, index) => (
                            <div key={index}>
                                <div className="CollapsList-text-sub-title">
                                    {item.title}
                                </div>
                                <div className="CollapsList-text-sub-text">
                                    { item.list.map( (item, index) => (
                                        <span key={index}>{item.item}<span>,</span></span>
                                    ))}
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    )

}
export default CollapsList;
