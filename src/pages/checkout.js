import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {maxCol, minCol} from "../function/SizeCol";
import {AuthLayout} from "../function/AuthLayout";
import Layout from "../components/Layout";
import {graphql, Link, navigate, useStaticQuery} from "gatsby";
import {localStoreService} from "../function/hook";
import svgEdit from "../assets/img/edit.svg";
import GetDataAccount from "../function/dataAccount";
import FormEdit from "../components/account/FormEdit";
import useCheckout from "../function/useCheckout";
import Title from "../components/constructor/Title";

const CartPage = () => {

    const data = useStaticQuery(graphql` 
        {
            wp { 
                allSettings {
                    generalSettingsTitle 
                    generalSettingsDescription
                }
                themeGeneralSettings {
                    ACFoptionThemes {
                        deliveryMethods {
                            name
                        }
                        paymentMethod {
                            name
                        }
                    }
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


    const { dataAccount, fetchDataAccount, isLoadingDataAccount } = GetDataAccount();

    useEffect(() => {
        fetchDataAccount()
    }, []);


    const [sBlock, setSBlock ] = useState(false);
    const [sBlockOption, setSBlockOption ] = useState(0);

    const settingBlock = (style, option) => {
        setSBlock(style)
        setSBlockOption(option)
        navigate(`#AccountScroll-0`)
        fetchDataAccount()

        // console.log('settingBlock', style, option)
    }


    const [checkedDelivery, setCheckedDelivery ] = useState(data.wp.themeGeneralSettings.ACFoptionThemes.deliveryMethods[0].name);
    const [checkedPayment, setCheckedPayment ] = useState(data.wp.themeGeneralSettings.ACFoptionThemes.paymentMethod[0].name);

    // console.log(">>>>>", data.wp.themeGeneralSettings.ACFoptionThemes.deliveryMethods[0].name);


    const { values, captureInput, submitForm, isLoading, error, message } = useCheckout( cart );

    const OnChecked = (type, name) => {
        if (type === 'checkedPayment') {
            setCheckedPayment(name)
        }
        if (type === 'checkedDelivery') {
            setCheckedDelivery(name)
        }

        // console.log('>>', type , name)
    }


    return (
        <AuthLayout
            logIn={false}
            logInGo='/'
            // redirectGoLogIn={ location.length === 2  && location[1] }
        >


            <Layout title="Cart"  desc={ data.wp.allSettings.generalSettingsTitle } >
                <CartSection className="page-cart">


                    {
                        cart ? (
                            <div id='AccountScroll-0' className='container section-box'>

                                {
                                    sBlock === false ? (
                                        <>
                                            <Title item={{title : `CHECKOUT`}} />
                                            <div  style={{marginBottom: '3rem'}}>
                                                <Link className='btn style-3' to={`/cart/`}>return Bag</Link>
                                            </div>
                                        </>
                                    ) : ''
                                }




                                {
                                    error?.result === 'error' ? (
                                        <div className='statusInfo error'>
                                            <strong>Fill in these fields:</strong>
                                            <div>
                                                {
                                                    error.message.map((item, index) => (
                                                        <>
                                                            {
                                                                item.status === 0 ? (
                                                                    <div key={`input-valid-${index}`} dangerouslySetInnerHTML={{ __html: item.name }} />
                                                                ) : ('')
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : ('')
                                }


                                {
                                    sBlock === false ? (
                                        <form onSubmit={submitForm}  action="">
                                            <input type="hidden"
                                                   name='garbage'
                                                   onChange={captureInput}
                                                   disabled={isLoading}
                                                   value={values.garbage}
                                            />

                                            <input type="hidden"
                                                   name='delivery'
                                                   onChange={captureInput}
                                                   disabled={isLoading}
                                                   value={values.delivery = checkedDelivery }
                                            />

                                            <input type="hidden"
                                                   name='payment'
                                                   onChange={captureInput}
                                                   disabled={isLoading}
                                                   value={values.payment = checkedPayment }
                                            />

                                            <input type="hidden"
                                                   name='dataAccount'
                                                   onChange={captureInput}
                                                   disabled={isLoading}
                                                   value={values.dataAccount = isLoadingDataAccount === false ? ( dataAccount.result ) : ('') }
                                            />

                                            <div className="row">
                                                <div className="col-9">
                                                    <div className='WrapCart'>
                                                        <div className="list">
                                                            <>
                                                                {isLoadingDataAccount === false ? (
                                                                    dataAccount.result?.meta_data?.map((item, index) => {
                                                                        if ( item.key === 'active_acount' ) {
                                                                            // console.log('>>>>', item.value);
                                                                            if ( item.value === '0' ) {
                                                                                return (
                                                                                    dataAccount.result?.last_name === ''
                                                                                    || dataAccount.result?.first_name === ''
                                                                                    || dataAccount.result?.email == ''
                                                                                    || dataAccount.result?.email == ''
                                                                                    || dataAccount.result?.billing.company === ''
                                                                                    || dataAccount.result?.billing.last_name === ''
                                                                                    || dataAccount.result?.billing.first_name === ''
                                                                                    || dataAccount.result?.billing.email === ''
                                                                                    || dataAccount.result?.billing.phone === ''
                                                                                    || dataAccount.result?.billing.country === ''
                                                                                    || dataAccount.result?.billing.city === ''
                                                                                    || dataAccount.result?.billing.address_1 === ''
                                                                                    || dataAccount.result?.billing.postcode === ''
                                                                                        ? ( <div className='informBox'>To activate your account, please fill in all the contact details below.</div> ) :
                                                                                        ( <div className='informBox'>After filling in all relevant data, your account will be activated within 24 hours. But you will be able to see all current prices after activation of your account by the site administration.</div> )

                                                                                )
                                                                            }
                                                                        }
                                                                    })
                                                                ) : ('')}
                                                                <DatePerson>
                                                                    <div className="title">
                                                                        Delivery methods
                                                                    </div>


                                                                    <div className="wrap warp-list-radio">
                                                                        {
                                                                            data.wp.themeGeneralSettings.ACFoptionThemes.deliveryMethods.map((item, index) => (
                                                                                <div key={`deliveryMethods-${index}`} className="list">
                                                                                    <label onClick={()=>OnChecked('checkedDelivery', item.name)} className='d-flex align-items-center' htmlFor={`delivery-${index}`}>
                                                                                        <span className={checkedDelivery === item.name ? ('checked'):('')}>{item.name}</span>
                                                                                    </label>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>

                                                                </DatePerson>
                                                                <DatePerson>
                                                                    <div className="title">
                                                                        Payment method
                                                                    </div>



                                                                    <div className="wrap warp-list-radio">
                                                                        {
                                                                            data.wp.themeGeneralSettings.ACFoptionThemes.paymentMethod.map((item, index) => (
                                                                                <div key={`paymentMethod-${index}`} className="list">
                                                                                    <label onClick={()=>OnChecked('checkedPayment', item.name)} className='d-flex align-items-center' htmlFor={`payment-${index}`}>
                                                                                        <span className={checkedPayment === item.name ? ('checked'):('')}>{item.name}</span>
                                                                                    </label>
                                                                                </div>
                                                                            ))
                                                                        }

                                                                    </div>

                                                                </DatePerson>
                                                                <DatePerson>
                                                                    <div className="title">
                                                                        personal information
                                                                    </div>
                                                                    <div className="wrap">
                                                                        <div className="list">
                                                                            <span onClick={()=>settingBlock(true, 1)} className="edit"></span>
                                                                            <div>
                                                                                <strong>
                                                                                    {
                                                                                        isLoadingDataAccount === false ? (
                                                                                            dataAccount.result?.last_name === '' ? ( '....' ) : ( dataAccount.result?.last_name )
                                                                                        ) : ('....')
                                                                                    }
                                                                                    &nbsp;
                                                                                    {
                                                                                        isLoadingDataAccount === false ? (
                                                                                            dataAccount.result?.first_name === '' ? ( '....' ) : ( dataAccount.result?.first_name )
                                                                                        ) : ('....')
                                                                                    }
                                                                                </strong>
                                                                            </div>
                                                                            <div className="email">
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.email === '' ? ( '....' ) : ( dataAccount.result?.email )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                            <div className="company">
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.company === '' ? ( '....' ) : ( dataAccount.result?.billing?.company )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DatePerson>
                                                                <DatePerson>
                                                                    <div className="title">
                                                                        my shipping information
                                                                    </div>
                                                                    <div className="wrap">
                                                                        <div className="list">
                                                                            <span onClick={()=>settingBlock(true, 2)} className="edit"></span>
                                                                            <div>
                                                                                <strong>
                                                                                    {
                                                                                        isLoadingDataAccount === false ? (
                                                                                            dataAccount.result?.billing?.last_name === '' ? ( '....' ) : ( dataAccount.result?.billing?.last_name )
                                                                                        ) : ('....')
                                                                                    }
                                                                                    &nbsp;
                                                                                    {
                                                                                        isLoadingDataAccount === false ? (
                                                                                            dataAccount.result?.billing?.first_name === '' ? ( '....' ) : ( dataAccount.result?.billing?.first_name )
                                                                                        ) : ('....')
                                                                                    }
                                                                                </strong>
                                                                            </div>
                                                                            <div className='email'>
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.email === '' ? ( '....' ) : ( dataAccount.result?.billing?.email )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                            <div className='phone'>
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.phone === '' ? ( '....' ) : ( dataAccount.result?.billing?.phone )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                            <div className='country'>
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.country === '' ? ( '....' ) : ( dataAccount.result?.billing?.country )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                            <div className='city'>
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.city === '' ? ( '....' ) : ( dataAccount.result?.billing?.city )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                            <div className='address_1'>
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.address_1 === '' ? ( '....' ) : ( dataAccount.result?.billing?.address_1 )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>
                                                                            <div className='postcode'>
                                                                                {
                                                                                    isLoadingDataAccount === false ? (
                                                                                        dataAccount.result?.billing?.postcode === '' ? ( '....' ) : ( dataAccount.result?.billing?.postcode )
                                                                                    ) : ('....')
                                                                                }
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </DatePerson>
                                                            </>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-3">
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
                                                            <button disabled={isLoading} type="submit" className='btn style-3 w100'>
                                                                { isLoading ? 'SEND...' :  'CONFIRM'  }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    ) : (
                                        <FormEdit type={sBlockOption} click={()=>settingBlock(false, 0)} />
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

const CartSection = styled.div`
  .statusInfo { 
    margin: 4rem auto;
    padding: 2rem;
    color: #fff;
    &.error {
      background: #ffe4d0;
      color: #1a0f07;
    }
    &.done {
      background: #1a0f07;
    }
    &.active {
      display: block;
    }
  }
  
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
    border-left: 1px solid #000;
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
      padding-left: 2.5rem;
      margin-bottom: 2.4rem;
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
  }
  .WrapCart {
    max-width: 84rem;
    .title {
      font-size: 3rem;
      margin-bottom: 5rem;
      font-weight: 700;
    }
    .ItemCart {
      margin-bottom: 10rem;
    }
  }
`;

const DatePerson = styled.div`
    .warp-list-radio {
      label {
        cursor: pointer;
        font-weight: 700;
      }
      span {
        padding-left: 3rem; 
        position: relative;
        display: flex;
        &:before, &:after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          content: '';
          display: inline-block;
        }
        &:before {
          width: 2rem;
          height: 2rem;
          border: 0.1rem solid #000;
        }
        &:after {
          width: 1.2rem;
          height: 1.2rem;
          left: 0.4rem;
          background-color: #86644b;
          visibility: hidden;
          opacity: 0;
        }
        
      }
      span.checked {
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }
      .list {
        margin-top: -1px;
        &:first-child {
          margin-top: 0;
        }
      }
    }
    .title {
      margin-bottom: 3rem;
      font-weight: 700;
      text-transform: uppercase;
      
    } 
    .list {
      border: 1px solid #000;
      padding: 2.5rem;
      position: relative;
      max-width: 53rem;
    }
    .wrap {
      margin-bottom: 9rem;
    }
    .edit {
      background-size: 65% auto;
      background-image: url(${svgEdit});
      width: 3.5rem;
      height: 3.5rem;
      background-color: #86644B;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 2;
    }
`;