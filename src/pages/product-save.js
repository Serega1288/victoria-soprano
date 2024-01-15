import React, {useState} from 'react';
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import BlockSearch from "../components/Search/BlockSearch";
import {maxCol, minCol} from "../function/SizeCol";
import ProductItem from "../components/CategoryProduct/ProductItem";
import {localStoreService} from "../function/hook";
const SavePage = () => {

    //const [query, setQuery] = useState(null)
    //const results = useFlexSearch(query, index, store)

    const [ Save ] = useState(localStoreService.getLocal('saveProduct') || [] );
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

    //console.log('>>>', data)



    return (
        <Layout title="Save products"  desc={ data.wp.allSettings.generalSettingsTitle } >
                <h1 className="text-center">Saved</h1>
                <Section className="ListProduct">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-sm-3">
                            {
                                Save.length >= 1 ? (
                                    Save.map( (item, index) => {
                                        console.log('categoryItem', item);
                                        return (
                                            <ProductItem key={index} item={item} />
                                        )
                                    })
                                ) : (
                                    <div className='col-12 text-center'>
                                        <div>You have not saved any products yet</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Section>
                {/*{instanceAuthService.isLogined() ? 'true' : 'false' }*/}
                {/*/!* () => - потрібно щоб не вик*!/*/}
                {/*<span onClick={() => instanceAuthService.logout()}>dasdas</span>*/}

                {/*/!*{instanceAuthService.localStoreClear()}*!/*/}

                {/*{ typeof window !== 'undefined' && localStorage.getItem('user') }*/}

        </Layout>
    );
};
export default SavePage;

// export default () => (
//     <AuthLayout>
//         <SearchPage />
//     </AuthLayout>
// );

const Section = styled.section`
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media (max-width: ${maxCol.sm}) {
        .container {
            padding-left: 0.1rem;
            padding-right: 0.1rem;
            .row {
                --bs-gutter-x: 0.35rem;
            }
        }
    }
    
    --bs-gutter-x: 1.5rem;
    @media (max-width: ${maxCol.sm}) {
        padding-top: 5rem; 
        padding-bottom: 5rem;
    } 
    .ImageBG {
        display: block; 
        padding-top: 200%;
        background-size: cover;
        background-position: center center;
    }
    .ProductItemTitle {
        font-size: 4.5rem;
        line-height: 1;
        color: #000;
        margin-top:2.5rem;
        margin-bottom:2.5rem;
        @media (max-width: ${maxCol.sm}) {
            font-size: 2.2rem;
            margin-top:1.5rem;
            margin-bottom:2.2rem;
            padding-left: 1.5rem; 
            padding-right: 1.5rem;
        }
    } 
    a { 
        text-decoration: none;
        margin-bottom: 7.5rem;
        @media (max-width: ${maxCol.sm}) {
            margin-bottom: 0rem;
        }
    }
    .wrapLink {
      position: relative;
    }
    .save {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: #fff;
      padding: 0.7rem;
      z-index: 10;
      cursor: pointer;
    }
    @media(max-width:${maxCol.md}) {      
        .row > a {
            &:nth-child(3n+3) {
                padding-top: 5rem;
                border-top: 1px solid #000;
                border-bottom: 1px solid #000;
                margin-bottom: 2.5rem;
                width: 100%;
                padding-left: 1.6rem;
                padding-right: 1.6rem;
                .ImageBG {
                   padding-top: 152%;
                } 
            }
        }
    }
    @media(min-width:${minCol.md}) {
        .row > a {
            &:nth-child(5n+1), &:nth-child(5n+2) {
                width: 50%; 
                --bs-gutter-x: 3rem;
                .ImageBG {
                    padding-top: 150%;
                }
            }
        }
    }
    
`;
