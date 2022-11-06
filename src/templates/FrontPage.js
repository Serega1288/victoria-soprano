import React from 'react';
import Layout from '../components/Layout';

const FrontPage = props => {

    return (
        <Layout  title={` ${ props.pageContext.title } `}  >
            home page
        </Layout>
    );
};
export default FrontPage;