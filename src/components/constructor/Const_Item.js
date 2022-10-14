import React from 'react';
import Banner from './Banner';
import Collections from './Collections';
import Video from './Video';

const Const = ( { item } ) => {
    //console.log('>>', props.props );
    return (
        <>
            { item.fieldGroupName ? (
                <>
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Banner' ? ( <Banner item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Collections' ? ( <Collections item={item} /> ) : null }
                    { item.fieldGroupName == 'WpPage_Acfconstructor_Const_Videovoutube' ? ( <Video item={item} /> ) : null }
                </>
            ) : null }
        </>
    )
};
export default Const;