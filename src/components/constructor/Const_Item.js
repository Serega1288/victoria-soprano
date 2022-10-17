import React from 'react';
import Banner from './Banner';
import Collections from './Collections';
import Video from './Video';
import Instagram from './Instagram';
import Slider from './Slider';
import Title from './Title';
import Content1 from './Content_text_img_img';
import Content2 from './Content_img_title_text';


const Const = ( { item } ) => {
    //console.log('>>', props.props );
    return (
        <>
            { item.fieldGroupName ? (
                <>
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Banner' ? ( <Banner item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Collections' ? ( <Collections item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Videovoutube' ? ( <Video item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Instagram' ? ( <Instagram item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Slider' ? ( <Slider item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_Title' ? ( <Title item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_ContentTextImgImg' ? ( <Content1 item={item} /> ) : null }
                    { item.fieldGroupName == 'Page_Acfconstructor_Const_ContentImgTitleText' ? ( <Content2 item={item} /> ) : null }
                </>
            ) : null }
        </>
    )
};
export default Const;