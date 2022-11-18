import React from 'react';
import Layout from '../components/Layout';
//import { useLogin } from "gatsby-theme-headless-wordpress-admin";


const LoginPage = () => {


    // const [sendUserLogin, { data, error, loading, called }] = useLogin({
    //     onCompleted: (data) => {
    //         console.log({ data });
    //     },
    //     onError: (err) => {
    //         console.log({ err });
    //     },
    // });

    return (
        <Layout title="Login">
            <div className="Login d-flex justify-content-center align-items-center flex-column">
                {/*<button*/}
                {/*    onClick={() =>*/}
                {/*        sendUserLogin({*/}
                {/*            variables: { username: "your_username", password: "your_password" },*/}
                {/*        })*/}
                {/*    }*/}
                {/*/>*/}
            </div>
        </Layout>
    );
};
export default LoginPage;