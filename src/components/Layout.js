import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalFonts from '../styles/GlobalFonts';
import GlobalCols from '../styles/GlobalCols';
import  GlobalStyles from '../styles/GlobalStyles';
import  Header from './header/Header';
import  Footer from './footer/Footer';
import styled from "styled-components";
import {maxCol} from "../function/SizeCol";
import bolkitBold from '../assets/fonts/bolkit/bolkit-bold.woff2';
import bolkit from '../assets/fonts/bolkit/bolkit.woff2';

// ${props => props.sizeCol.sm}

const Layout = ( {children, title, desc } ) => {
    //console.log('>>>', );
    return (
        <div className="body">
            <Helmet>
                <title>{ title } | { desc }</title>
                <link rel="preload" href={bolkit} as="font" type="font/woff2" crossOrigin="anonymous" />
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
      
      & > section:first-child .ContactData {
        margin-bottom: 13rem;
        @media(max-width: ${maxCol.sm}) {
           margin-bottom: 5rem;
        }
      }
`;
