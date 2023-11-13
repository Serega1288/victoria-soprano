import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {maxCol, minCol} from "../function/SizeCol";
import {AuthLayout} from "../function/AuthLayout";
import Layout from "../components/Layout";
import {graphql, Link, navigate, useStaticQuery} from "gatsby";
import {localStoreService} from "../function/hook";

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


    const [ cart, cartSet ] = useState( localStoreService.getLocal('CartBuy') || null );
    const [ stepCartNumber, stepCartNumberSet ] = useState(0);
    const [ subtotal, subtotalSet ] = useState(0);
    const [ total, totalSet ] = useState(0);

    useEffect(() => {
        // cartSet( localStoreService.getLocal('CartBuy') )
        // console.log('cart', cart)
        let stepCart = 0;
        let subtotalCart = 0;
        let totalCart = 0;
        if ( cart ) {

            cart.map((item, index) => (
                stepCart = stepCart + item.step
            ) );

            document.getElementById("BagCount-1").innerHTML = stepCart;
            document.getElementById("BagCount-2").innerHTML = stepCart;

            cart.map((item, index) => (
                subtotalCart = subtotalCart + (item.price * item.step)
            ) );

            subtotalSet(subtotalCart)

            cart.map((item, index) => (
                totalCart = totalCart + (item.price * item.step)
            ) );

            totalSet(totalCart)

        }
        // console.log('instanceAuthService', stepCart, cart );
        stepCartNumberSet(stepCart);

    }, [cart, stepCartNumber, subtotal, total]);
    // }, []);

    
    const removeProductCart = ( op1,op2, op3 ) => {

        cart.map((item, indx) => {
            if ( item.id === op1 && item.color === op2 && item.size === op3  ) {

                const updatedItems = cart.filter((_, index) => index !== indx);
                cartSet(updatedItems)
                // console.log('op', indx, cart, updatedItems)
                localStoreService.saveLocal('CartBuy', updatedItems );

            }

        } );

        navigate(`#CartScroll-0`);
    }


    // 'min', item.step, item.id, item.color, item.size
    const clickStep = ( op, step, op1, op2, op3, c, indx) => {






        if ( c !== null ) {

            const x = [...c];

            if ( op === 'plus' ) {
                x[indx].step++;

            }
            if ( op === 'min' ) {
                if ( x[indx].step !== 1 ) {
                    x[indx].step--;
                }
            }

            cartSet(x);
            localStoreService.saveLocal('CartBuy', x );

            console.log('x', x);

        }


    };


    return (
        <AuthLayout
            logIn={false}
            logInGo='/'
            // redirectGoLogIn={ location.length === 2  && location[1] }
        >


            <Layout title="Cart"  desc={ data.wp.allSettings.generalSettingsTitle } >
                <CartSection id='CartScroll-0' className="page-cart">
                    {
                        cart ? (
                            <div className='container section-box'>
                                <div className="title">
                                    {
                                        cart?.length === 0 ? (
                                            'Your basket is empty'
                                        ) : (
                                            `Your shopping bag (${ stepCartNumber })`
                                        )
                                    }
                                </div>

                                {
                                    cart?.length === 0 ? (
                                        ''
                                    ) : (
                                        <div className="row">
                                            <div className="col-12 col-md-9">
                                                <div className='WrapCart'>
                                                    {
                                                        cart?.map((item, index) => (
                                                            <div key={`cartList ${index}`} className='ItemCart'>
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6">
                                                                        <Link to={item.uri}>
                                                                            <img src={item.img.node.localFile.publicURL} alt=""/>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6">
                                                                        <div className="wrapProductDate">
                                                                            <div className="title bolkit">
                                                                                {item.title}
                                                                            </div>
                                                                            <div className="art">
                                                                                {item.art}
                                                                            </div>
                                                                            <div className="attr">
                                                                                <div className="row">
                                                                                    <div className="col">Color</div>
                                                                                    <div className="col-auto"><strong>{item.color}</strong></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="attr">
                                                                                <div className="row">
                                                                                    <div className="col">Size</div>
                                                                                    <div className="col-auto"><strong>{item.size}</strong></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="wrapStep">
                                                                                <div className="row">
                                                                                    <div className="col">

                                                                                        <div className="step">
                                                                                            <span onClick={()=>clickStep('min', item.step, item.id, item.color, item.size, cart, index)} className="min">-</span>
                                                                                            <span>{item.step}</span>
                                                                                            <span onClick={()=>clickStep('plus', item.step, item.id, item.color, item.size, cart, index )} className="plus">+</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-auto">
                                                                                        <div className="price">
                                                                                            {item.price * item.step}$
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="wrapBtn">
                                                                                <div className="row m-0">
                                                                                    <div className="col-6 p-0">
                                                                                        <div className="wrapBtnItem">
                                                                                            <Link className='a' to={item.uri}>
                                                                                                View Details
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-6 p-0">
                                                                                        <div className="wrapBtnItem">
                                                                                            <span onClick={()=>removeProductCart(item.id, item.color, item.size) } className='a'>
                                                                                                Remove
                                                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path d="M14.3484 14.8484C14.1233 15.0734 13.8181 15.1998 13.4999 15.1998C13.1816 15.1998 12.8764 15.0734 12.6514 14.8484L10.0004 11.8184L7.34938 14.8474C7.23828 14.9603 7.10593 15.0501 6.95995 15.1116C6.81397 15.1731 6.65726 15.2051 6.49885 15.2058C6.34045 15.2064 6.18348 15.1757 6.03701 15.1154C5.89053 15.0551 5.75745 14.9663 5.64544 14.8543C5.53343 14.7423 5.4447 14.6092 5.38438 14.4628C5.32406 14.3163 5.29333 14.1593 5.29398 14.0009C5.29462 13.8425 5.32663 13.6858 5.38814 13.5398C5.44965 13.3938 5.53946 13.2615 5.65238 13.1504L8.41038 10.0004L5.65138 6.84838C5.53846 6.73728 5.44865 6.60493 5.38714 6.45895C5.32563 6.31297 5.29362 6.15626 5.29298 5.99786C5.29233 5.83945 5.32306 5.68248 5.38338 5.53601C5.4437 5.38953 5.53243 5.25645 5.64444 5.14444C5.75645 5.03243 5.88953 4.9437 6.03601 4.88338C6.18248 4.82306 6.33945 4.79233 6.49786 4.79298C6.65626 4.79362 6.81297 4.82563 6.95895 4.88714C7.10493 4.94865 7.23728 5.03846 7.34838 5.15138L10.0004 8.18238L12.6514 5.15138C12.7625 5.03846 12.8948 4.94865 13.0408 4.88714C13.1868 4.82563 13.3435 4.79362 13.5019 4.79298C13.6603 4.79233 13.8173 4.82306 13.9638 4.88338C14.1102 4.9437 14.2433 5.03243 14.3553 5.14444C14.4673 5.25645 14.5561 5.38953 14.6164 5.53601C14.6767 5.68248 14.7074 5.83945 14.7068 5.99786C14.7061 6.15626 14.6741 6.31297 14.6126 6.45895C14.5511 6.60493 14.4613 6.73728 14.3484 6.84838L11.5904 10.0004L14.3484 13.1504C14.4599 13.2618 14.5485 13.3942 14.6089 13.5399C14.6692 13.6855 14.7003 13.8417 14.7003 13.9994C14.7003 14.1571 14.6692 14.3132 14.6089 14.4589C14.5485 14.6046 14.4599 14.7369 14.3484 14.8484Z" fill="black"/>
                                                                                                </svg>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) )
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <div className="WrapTotal">
                                                    <div className="TotalItem">
                                                        <div className="row">
                                                            <div className="col">Subtotal</div>
                                                            <div className="col-auto">
                                                                {subtotal}$
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="TotalItem strong">
                                                        <div className="row">
                                                            <div className="col">TOTAL</div>
                                                            <div className="col-auto">{total}$</div>
                                                        </div>
                                                    </div>
                                                    <div className="wrap-btn text-center">
                                                        <Link className='btn style-3 w100' to='/checkout'>CHECKOUT</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }



                            </div>
                        ) : (
                        <div className='container section-box text-center'>
                            <h1 className='title'>
                                Your basket is empty.
                            </h1>
                            <br />
                            <Link className='btn style-3' to='/'>GO to home</Link>
                        </div>
                        )
                    }

                </CartSection>
            </Layout>

        </AuthLayout>
    )
};
export default CartPage;

const CartSection = styled.section`
  min-height: 45vh;
  padding-top: 5rem;
  .step {
    max-width: 8rem;
    border: 1px solid #000;
    height: 4.5rem;
    display: flex;
    align-items: center;
    & > * {
      width: 33.33%;
      height: 100%;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .min, .plus {
      cursor: pointer;
      &:hover {
        color: #86644b;
        .anim;
      }
    }
  }
  .wrapProductDate {
    @media (min-width: ${minCol.sm}) {
      border-left: 1px solid #000;
    }
    height: 100%;
    strong {
      font-weight: 600;
    }
    .art {
      color: #86644B;
    }
    .wrapBtn {
      border-top: 1px solid #000;
      padding-left: 0;
      border-bottom: 1px solid #000;
    }
    .price { 
      font-size: 3rem;
      font-weight: 700;
    }
    .wrapBtnItem {
      border-right: 1px solid #000;
      @media (max-width: ${maxCol.sm}) {
        border-left: 1px solid #000;
      }
      .a {
        display: block; 
        width: 100%;
        color: #000;
        text-decoration: none;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          svg path {
            fill: #fff;
          }
          background-color: #000;
          color: #fff;
        }
      }
    }
    & > div {
      margin-bottom: 2.4rem;
      @media (min-width: ${minCol.sm}) {
        padding-left: 2.5rem;
      }
    }
    .title {
      margin: 0;
      border-bottom: 1px solid #000;
      padding-bottom: 1rem;
      padding-top: 1rem;
      font-size: 6.8rem;
      margin-bottom: 1rem;
    }
  }
  .TotalItem {
    margin-bottom: 1.8rem;
    font-size: 1.8rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    &.strong {
      margin-top: 2.5rem;
      font-weight: 700;
      font-size: 3rem;
    }
  }
  .WrapTotal {
    border: 1px solid #000;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 10rem;
  }
  .title {
    font-size: 3rem;
    margin-bottom: 5rem;
    font-weight: 700;
  }
  .WrapCart {
    max-width: 84rem;
    .ItemCart {
      margin-bottom: 10rem;
    }
  }
`;

