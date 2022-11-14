import React, {useState} from 'react';
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Form, Field } from 'formik'
import Layout from '../components/Layout';
import {graphql, useStaticQuery} from "gatsby";
import {maxCol} from "../function/SizeCol";
import styled from "styled-components";

const index = 0 /* a FlexSearch index */
const store = {
    1: { id: 1, title: 'Document 1' },
    2: { id: 2, title: 'Document 2' },
    3: { id: 3, title: 'Document 3' },
}

const SearchPage = () => {

    const [query, setQuery] = useState(null)
    const results = useFlexSearch(query, index, store)

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
        <Layout title="Seacrh"  desc={ data.wp.allSettings.generalSettingsTitle } >
            <Search className="page-404 d-flex justify-content-center align-items-center flex-column">
                <h1>SearchPage</h1>
                <Formik
                    initialValues={{ query: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setQuery(values.query)
                        setSubmitting(false)
                    }}
                >
                    <Form>
                        <Field name="query" />
                    </Form>
                    <h1>Results</h1>
                    <ul>
                        {results.map(result => (
                            <li key={result.id}>{result.title}</li>
                        ))}
                    </ul>
                </Formik>
            </Search>
        </Layout>
    );
};
export default SearchPage;

const Search = styled.section`
    text-align: center;
    height: calc(100vh - 13.4rem); 
    @media (max-width: ${maxCol.lg}) {
         
    }
    @media (max-width: ${maxCol.sm}) { 
        height: calc(100vh - 8.8rem);   
    } 
    
`;