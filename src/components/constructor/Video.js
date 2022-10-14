import React from 'react';
import styled from 'styled-components';

const Video = ( {item} ) => {
    console.log('item >>>', item);

    const ImageBG = styled.div`
        background-image: url(${ item });
    `;

    const Section = styled.section`
        
    `;

    return (
        <Section className="Video">
            <div className="container">
                <h2 className="block-title">
                    {item.blockTitle}
                </h2>
                <div className="block-video">
                    <ImageBG />
                </div>
            </div>

        </Section>

    )
};

export default Video;



