import React from 'react';
import styled from "styled-components";
import {AuthLayout} from "../function/AuthLayout";
import Layout from "../components/Layout";
import {graphql, Link, useStaticQuery} from "gatsby";
import orderConfirm from '../assets/img/order-confirm.png'
import {localStoreService} from "../function/hook";
import {maxCol, minCol} from "../function/SizeCol";

const CartPage = () => {

    const data = useStaticQuery(graphql` 
        { 
            wp { 
                allSettings {
                    generalSettingsTitle 
                    generalSettingsDescription
                }
            }
        }
    `)



    return (
        <AuthLayout
            logIn={false}
            logInGo='/'
            // redirectGoLogIn={ location.length === 2  && location[1] }
        >


            <Layout title="Cart"  desc={ data.wp.allSettings.generalSettingsTitle } >
                <CartSection className="page-cart">

                    <div className='container section-box'>

                        <div className="box-title">
                            <img src={orderConfirm} alt=""/>
                            <div className="wrap-title">
                                <div className='wrap-text'>
                                    <div className='text'>
                                        Thanks your order. <br/>
                                        Your order № { localStoreService.getLocal('lastOrder') }
                                    </div>
                                    <div className='text-min'>
                                        You will be contacted shortly. <br />
                                        Detailed information about your order - <Link to={'/account/order'}>here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </CartSection>
            </Layout>

        </AuthLayout>
    )
};
export default CartPage;

const CartSection = styled.div`
  min-height: 45vh;
  padding-top: 5rem;
  .section-box {
      position: relative;
      text-align: center;
      .box-title {
        position: relative;
      }
    .wrap-title {
      position: absolute;
      top: 0;
      bottom: 5rem;
      left: 0;
      right: 0;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      @media (max-width: ${maxCol.md}) {
        position: relative;
      }
    }
    .title {
      font-size: 16rem;
      font-family: 'Bolkit';
      font-weight: 700;
      line-height: 1;
      
    }
    .text {
      font-size: 6.8rem;
      font-family: 'Bolkit';
      font-weight: 700;
      @media (max-width: ${maxCol.md}) {
        font-size: 4rem;
        line-height: 1.4;
        margin-bottom: 1.5rem;
      }
    }
    .text-min {
      font-family: 'sfPro';
      font-size: 2.2rem;
      font-weight: 600;
      @media (max-width: ${maxCol.md}) {
        line-height: 1.4;
        font-weight: 400;
      }
    }
    .wrap-text {
      margin-bottom: 5rem;
      background: rgba(255,255,255,0.5);
      padding: 2rem;
      @media (max-width: ${maxCol.md}) {
        background-color: rgba(0,0,0,0);
        padding: 0;
      }
    }
  }
`;

