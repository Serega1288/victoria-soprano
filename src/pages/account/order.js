import React, {useState, useEffect} from 'react';
import {minCol, maxCol} from "../../function/SizeCol"
import {AuthLayout} from "../../function/AuthLayout";
import Layout from "../../components/Layout";
import LayoutAccount from '../../components/LayoutAccount';
import styled from "styled-components";
import {localStoreService} from "../../function/hook";
import {format} from "date-fns";
import OrderDetails from "../../components/account/OrderDetails"
const AccountPage = () => {


    const [sBlock, setSBlock ] = useState(null);
    const tableList = (style, scroll) => {
        setSBlock(style)
        // console.log('settingBlock', style, scroll)
        // navigate(`#tableList-${scroll}`)
    }

    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
        // fetchDataAccount()
        fetchData();

    }, []);

    // console.log('data', data.number)


    const fetchData = async () => {
        let ob = { get: `orders?customer=${localStoreService.getLocal(process.env.LOCAL_TOKEN)?.split('ud=')[1]}`, type : `order` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/getSetDateAccount`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const data = await response.json();
        if (data) {
            setData(data.result);
            setIsLoadingData(false)
            // console.log('data >>>',  data )
        }

    };

    const sumPrice = (products) => {
        // console.log('products', products)
        let sum = 0;
        for (const field of products) {
            sum = sum + +field.total;
        }
        return sum + '$';
    };

    const sumTotal = (products) => {
        // console.log('products', products)
        let sum = 0;
        for (const field of products) {
            sum = sum + +field.quantity;
        }
        return sum;
    };



    return (
        <AuthLayout
            logIn={false}
            logInGo='sign-in'
            // redirectGoLogIn={ location.length === 2  && location[1] }
        >
            <Layout title="dashbord" desc="desc">
                <LayoutAccount>
                    <WrapOrder>

                        <div className="Wrap" id="tableList-0">

                            {
                                sBlock === null ? (
                                    <>
                                            {
                                                isLoadingData === false ? (
                                                    <>
                                                        {
                                                            data.length ? (
                                                                <>
                                                                    <div style={{minHeight: '4.609rem'}} className="title d-flex align-items-center">
                                                                        my Order
                                                                    </div>
                                                                    <div className="wrapOrders">
                                                                        {
                                                                            data.map((item,index)=>(
                                                                                <div className="row lineWrap">
                                                                                    <div className="col-auto">
                                                                                        <div className="wrapImg">
                                                                                            <div style={{backgroundImage: `url(${item.line_items[0]?.image.src})`}} className="img"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <div className="wrap">
                                                                                            <div className="row">
                                                                                                <div className="col-6">
                                                                                                    <strong>
                                                                                                        Order Number:
                                                                                                    </strong>
                                                                                                </div>
                                                                                                <div className="col-6">
                                                                                                    {item.number}
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-6">
                                                                                                    <strong>
                                                                                                        Total price:
                                                                                                    </strong>
                                                                                                </div>
                                                                                                <div className="col-6">
                                                                                                    {
                                                                                                        sumPrice(item.line_items)
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-6">
                                                                                                    <strong>
                                                                                                        Taken to work:
                                                                                                    </strong>
                                                                                                </div>
                                                                                                <div className="col-6">
                                                                                                    {format( new Date(item.date_created), 'yyyy/MM/dd')}
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-6">
                                                                                                    <strong>
                                                                                                        Total:
                                                                                                    </strong>
                                                                                                </div>
                                                                                                <div className="col-6">
                                                                                                    {
                                                                                                        sumTotal(item.line_items)
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-6">
                                                                                                    <strong>
                                                                                                        Status:
                                                                                                    </strong>
                                                                                                </div>
                                                                                                <div className="col-5">
                                                                                                    {
                                                                                                        item.status
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-12">
                                                                                                    <span  onClick={()=>tableList(index, 0)} style={{maxWidth:`25rem`}} className='btn style-3 w100'>Order details</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div style={{minHeight: '4.609rem'}} className="title d-flex align-items-center">
                                                                        my Order
                                                                    </div>
                                                                    <div className="wrapOrders">
                                                                        <div style={{marginTop: '4.4rem'}} className='title'>You have not made any purchases yet</div>
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                ) : (
                                                    <>
                                                        <div style={{minHeight: '4.609rem'}} className="title d-flex align-items-center">
                                                            my Order
                                                        </div>
                                                        <div className="wrapOrders">
                                                            <div style={{marginTop: '4.4rem'}} className='title'>loading...</div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                    </>
                                ) : (
                                    <>
                                       <div className="row d-flex align-items-center title">
                                           <div className="col">
                                               <div>
                                                   orders details: {data[sBlock].number}
                                               </div>
                                           </div>
                                           <div className="col-auto">
                                               <span className='btn style-3' onClick={()=>tableList(null, sBlock )}>
                                                    <svg style={{marginRight: '1rem'}} width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M3.21932 6.66664L6.79532 10.2426L5.85265 11.1853L0.667318 5.99997L5.85265 0.814636L6.79532 1.7573L3.21932 5.3333L11.334 5.3333L11.334 6.66664L3.21932 6.66664Z" fill="#CBCBCB"/>
                                                    </svg>
                                                    Back
                                               </span>
                                           </div>
                                       </div>

                                        <div className="Wrap WrapOrderDelails orderList">
                                            <OrderDetails s={data[sBlock]} />
                                        </div>
                                    </>
                                )
                            }
                        </div>




                    </WrapOrder>
                </LayoutAccount>
            </Layout>
        </AuthLayout>
    );
};
export default AccountPage;

const WrapOrder = styled.div`
  .wrapList {
    margin-top: 10rem;
    @media (max-width:${maxCol.sm}) {
      margin-top: 4rem;
    }
    .list {
      border: 1px solid #000;
      padding: 2.5rem;
      position: relative;
      margin-bottom: 5rem;
      //max-width: 53rem;
    }
  }
  .detailsOrder {
    .wrapTotal {
      border-bottom: 1px solid #000; 
      .wrapAttr {
        margin-bottom: 2.5rem;
      }
    }
    .wrap {
      padding-left: 0;
    }
    .title {
      margin-top: 5rem;
      margin-bottom: 2.5rem;
    }
    .wrapOrders {
      padding-top: 2.5rem;
    } 
    .wrapAttr {
      //font-size: 1.8rem; 
      margin-bottom: 1.5rem;
      @media (max-width:${maxCol.sm}) {
        font-size: 1.4rem;
      }
    }
    .name {
      font-size: 2.2rem;
      @media (max-width:${maxCol.sm}) {
        font-size: 1.8rem;
      }
      font-style: normal;
      font-weight: 600; 
      margin-bottom: 2.5rem;
    }
    .wrapImg {
      display: block;
      height: auto;
      @media (max-width:${maxCol.sm}) {
        margin-bottom: 4rem;
      }
      .img {
        position: relative;
        padding-top: 128%;
      }
    }
    .productList {
      padding-top: 2.5rem;
      border-bottom: 1px solid #000;
      & > div {
        margin-bottom: 5rem;
      }
    }
  }
  .title {
    margin-bottom: 5rem;
    font-weight: 600;
    font-size: 2.2rem;
    @media (max-width:${maxCol.sm}) {
      font-size: 1.8rem; 
      margin-bottom: 2rem !important;
    }
    text-transform: uppercase;
  }
  .wrapOrders {
    border-top: 1px solid #000;
    .lineWrap {
      border-top: 1px solid #000;
      padding-top: 4.4rem;
      padding-bottom: 5rem;
      @media (max-width:${maxCol.sm}) {
        padding-top: 2rem; 
        padding-bottom: 2rem;
      }
      &:first-child {
        border: none;
      }
    }
  }
  .wrapImg {
    width: 20rem; 
    //width: 100%;
    margin-right: 5.2rem;
    position: relative;
    height: 100%;
    .img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: center center;
      background-size: cover;
    }
  }
  .wrap {
    max-width: 35rem;
    padding-left: 2rem;
    font-size: 1.8rem;
    @media (max-width:${maxCol.sm}) {
      font-size: 1.6rem;
    }
    .row {
      margin-bottom: 1.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
