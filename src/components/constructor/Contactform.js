import React from 'react';
import styled from "styled-components";

const Editor = ( { item } ) => {
    console.log('editor >>>', item);
    return (
        <Section className="section editor">
            <div className="container">
                {/*<div className="text" dangerouslySetInnerHTML={{__html: item.text}} />*/}
            </div>
        </Section>
    )
}
export default Editor;

const Section = styled.section`
    .text {
        
    }
`;

