import React from 'react';
import { Helmet } from 'react-helmet';
import  GlobalCols from '../styles/GlobalCols';
import  GlobalStyles from '../styles/GlobalStyles';
import  Header from './header/Header';
import  Footer from './footer/Footer';
import styled from "styled-components";
import {maxCol} from "../function/SizeCol";


// ${props => props.sizeCol.sm}

const Layout = ( {children, title, desc } ) => {
    //console.log('>>>', );
    return (
        <div className="body">
            <Helmet>
                <title>{ title } | { desc }</title>
            </Helmet>
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
