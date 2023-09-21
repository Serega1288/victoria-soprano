import React, {useEffect, useState} from 'react';
import {navigate, Link} from "gatsby";
import {AuthLayout} from "../function/AuthLayout";
import Layout from "../components/Layout";
import LayoutAccount from '../components/LayoutAccount';
import styled from "styled-components";
import svgEdit from "../assets/img/edit.svg"
import GetDataAccount from "../function/dataAccount"
import FormEdit from "../components/account/FormEdit"
import JSONData from "../assets/country.json"
const AccountPage = () => {

    const getContryName = (name) => {
        // console.log('JSONData', JSONData.countries)
        const result = JSONData.countries.find(item => item.value === name)
        // console.log('JSONData', name, result)
        return result.label
    }


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


    return (
        <AuthLayout
            logIn={false}
            logInGo='sign-in'
            // redirectGoLogIn={ location.length === 2  && location[1] }
        >
            <Layout title="dashbord" desc="desc">
                <LayoutAccount>


                    {
                        sBlock === false ? (
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
                                                        ? ( <div key={index} className='informBox'>To activate your account, please fill in all the contact details below.</div> ) :
                                                        ( <div key={index} className='informBox'>After filling in all relevant data, your account will be activated within 24 hours. But you will be able to see all current prices after activation of your account by the site administration.</div> )

                                                )
                                            }
                                        }
                                    })
                                ) : ('')}


                                <DatePerson>
                                    <div className="title">
                                        personal information
                                    </div>
                                    <div className="wrap">
                                        <div className="list">
                                            <span  onClick={()=>settingBlock(true, 1)} className="edit"></span>
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
                                                        dataAccount.result?.billing?.country === '' ? ( '....' ) : (
                                                            getContryName(dataAccount.result?.billing?.country)
                                                    )

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
                                <DatePerson>
                                    <div className="title">
                                        Change password
                                    </div>
                                    <div className="wrap">
                                        <div className="list">
                                            {/*<span onClick={()=>settingBlock(true, 3)} className="edit"></span>*/}
                                            <Link className="edit" to={'/restart-pass/'}></Link>
                                            <div>
                                                <strong>********</strong>
                                            </div>
                                        </div>
                                    </div>
                                </DatePerson>
                            </>
                        ) : (
                            <FormEdit type={sBlockOption} click={()=>settingBlock(false, 0)} />
                        )
                    }



                </LayoutAccount>
            </Layout>
        </AuthLayout>
    );
};
export default AccountPage;

const DatePerson = styled.div`
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


