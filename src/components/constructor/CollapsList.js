import React, { useState } from 'react'
import useCollapse from 'react-collapsed'

const CollapsList = ({item, step , ev1, ev2, s } ) => {

    // const [open, setOpen ] = useState(false);
    // const clickHandler = () => {
    //     setOpen(!open)
    // }

    //const [visible, setVisible] = useState(false)


    const [isExpanded, setExpanded] = useState( step === ev1 || step === ev2 ? true : false );

    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

        //console.log('Collaps  >>>', step )
    return (
        <>
            {
                s === 'left' && (
                    step % 2 !== 0 ? (
                        <div className="box-collaps-list">
                            <div
                                {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                })}
                                className={`collaps-title pos ${isExpanded ? 'active' : ''}`}
                            >
                                <span className="anim" />{item.title}
                            </div>
                            <div  {...getCollapseProps()}>
                                {/*collaps-list*/}
                                { item.list.map( (item, index) => (
                                    <div className="box-list" key={index}>
                                        <div className="subTitle">{item.subTitle}</div>
                                        <div className="editor" dangerouslySetInnerHTML={{__html: item.editor}} />
                                    </div>
                                )) }
                            </div>

                        </div>
                    ) : false
                )
            }

            {
                s === 'right' && (
                    step % 2 === 0 ? (
                        <div className="box-collaps-list">
                            <div
                                {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                })}
                                className={`collaps-title pos ${isExpanded ? 'active' : ''}`}
                            >
                                <span className="anim" />{item.title}
                            </div>
                            <div  {...getCollapseProps()}>
                                {/*collaps-list*/}
                                { item.list.map( (item, index) => (
                                    <div className="box-list" key={index}>
                                        <div className="subTitle">{item.subTitle}</div>
                                        <div className="editor" dangerouslySetInnerHTML={{__html: item.editor}} />
                                    </div>
                                )) }
                            </div>

                        </div>
                    ) : false
                )
            }

            {
                s === 'all' && (

                        <div className="box-collaps-list">
                            <div
                                {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                })}
                                className={`collaps-title pos ${isExpanded ? 'active' : ''}`}
                            >
                                <span className="anim" />{item.title}
                            </div>
                            <div  {...getCollapseProps()}>
                                {/*collaps-list*/}
                                { item.list.map( (item, index) => (
                                    <div className="box-list" key={index}>
                                        <div className="subTitle">{item.subTitle}</div>
                                        <div className="editor" dangerouslySetInnerHTML={{__html: item.editor}} />
                                    </div>
                                )) }
                            </div>

                        </div>

                )
            }

        </>

    )
};
export default CollapsList;