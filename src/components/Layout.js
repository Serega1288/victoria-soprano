import React from 'react';
import { Helmet } from 'react-helmet';
import  GlobalStyles from '../styles/GlobalStyles';
import  Header from './Header';
import  Footer from './Footer';



const Layout = ( {children} ) => (
    <div>
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyles />
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    </div>
);

export default Layout;
