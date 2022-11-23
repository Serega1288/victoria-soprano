import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalFonts from '../styles/GlobalFonts';
import GlobalCols from '../styles/GlobalCols';
import  GlobalStyles from '../styles/GlobalStyles';
import  Header from './header/Header';
import  Footer from './footer/Footer';
import styled from "styled-components";
import {maxCol} from "../function/SizeCol";
import bolkit from '../assets/fonts/bolkit/bolkit.woff2';
// import {Script, ScriptStrategy} from "gatsby";


// ${props => props.sizeCol.sm}

const Layout = ( {children, title, desc } ) => {
    //console.log('>>>', );
    return (
        <div className="body">
            {/*<Script*/}
            {/*    id="pinit"*/}
            {/*    src="https://assets.pinterest.com/js/pinit.js"*/}
            {/*    strategy={ScriptStrategy.idle}*/}
            {/*    onLoad={() => console.log("success")}*/}
            {/*    onError={() => console.log("sadness")}*/}
            {/*/>*/}
            <Helmet>
                <title>{ title } | { desc }</title>
                <meta name="p:domain_verify" content="4304277d9010e64d1d62fde007276f2e"/>
                <link rel="preload" href={bolkit} as="font" type="font/woff2" crossOrigin="anonymous" />


                {/*<script src='https://assets.pinterest.com/js/pinit.js' />*/}
            </Helmet>
            <GlobalFonts />
            <GlobalCols />
            <GlobalStyles />
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </div>
    )
};

export default Layout;

const Main = styled.main`
        
      // min-height: 100vh;
      & > section:first-child .ContactData {
        border-top: none;
        //border-bottom: none;
      }
      
      & > section:last-child .ContactData {
        margin-bottom: 13rem;
        @media(max-width: ${maxCol.sm}) {
           margin-bottom: 5rem;
        }
      }
`;
