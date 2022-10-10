import React from 'react';
import { Helmet } from 'react-helmet';
import  GlobalStyles from '../styles/GlobalStyles';
import  Header from './header/Header';
import  Footer from './footer/Footer';
import styled from "styled-components";


const Layout = ( {children} ) => (
    <div>
        <div>
            <Helmet>

            </Helmet>
            <GlobalStyles />
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </div>
    </div>
);

export default Layout;

const Main = styled.main`
      min-height: 50vh;
`;
