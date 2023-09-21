import React from 'react';
// {useState}
//import { useFlexSearch } from 'react-use-flexsearch'
//import { Formik, Form, Field } from 'formik'
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
// import {instanceAuthService} from "../function/auth";
// import {AuthLayout} from "../function/AuthLayout";
// import FrontPage from "./404";
import styled from "styled-components";
import BlockSearch from "../components/Search/BlockSearch";
import {maxCol, minCol} from "../function/SizeCol";
const SearchPage = () => {





    //const [query, setQuery] = useState(null)
    //const results = useFlexSearch(query, index, store)

    const data = useStaticQuery(graphql` 
        {
            wp { 
                allSettings {
                    generalSettingsTitle 
                    generalSettingsDescription
                }
            }
#            allWpPost {
#                nodes {
#                  slug
#                  title
#                  content
#                }
#            }
        }
    `)

    //console.log('>>>', data)



    return (
        <Layout title="Seacrh"  desc={ data.wp.allSettings.generalSettingsTitle } >
            <Search className="page-search">
                <h1 className="text-center">Search</h1>
                <BlockSearch />
                {/*{instanceAuthService.isLogined() ? 'true' : 'false' }*/}
                {/*/!* () => - потрібно щоб не вик*!/*/}
                {/*<span onClick={() => instanceAuthService.logout()}>dasdas</span>*/}

                {/*/!*{instanceAuthService.localStoreClear()}*!/*/}

                {/*{ typeof window !== 'undefined' && localStorage.getItem('user') }*/}

            </Search>
        </Layout>
    );
};
export default SearchPage;

// export default () => (
//     <AuthLayout>
//         <SearchPage />
//     </AuthLayout>
// );


const Search = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  min-height: 50vh;
  .Result { 
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
  }
  
  .formStyle2 {
    width: 100%;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    label {
      margin-bottom: 2rem;
      display: block;

    }
    input, textarea {
      display: block;
      width:100%;
      background: rgba(0,0,0,0);
      border: 1px solid #000000;
      padding: 0 1rem;
    }
    input {
      height: 5rem;
    }
    textarea {
      height: 10rem;
      padding: 1rem;
    }
    span {
      display: block;
      margin-bottom: 0.5rem;
    }
    button {
      margin-top: 2rem;
      height: 5rem;
      min-width: 100%;
      @media (min-width: ${minCol.sm}) {
        min-width: 20rem;
      }

    }
  }
`;