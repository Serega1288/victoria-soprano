import React from 'react';

import {AuthLayout} from "../../function/AuthLayout";
import Layout from "../../components/Layout";

import LayoutAccount from '../../components/LayoutAccount';
const AccountPage = () => {

    return (
        <AuthLayout
            logIn={false}
            logInGo='sign-in'
            // redirectGoLogIn={ location.length === 2  && location[1] }
        >
            <Layout title="dashbord" desc="desc">
                <LayoutAccount>
                    дашборн !!!!!!!
                </LayoutAccount>
            </Layout>
        </AuthLayout>
    );
};
export default AccountPage;



