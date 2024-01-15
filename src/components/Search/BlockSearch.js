import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';

// import { SearchModalContext } from '../../contexts/searchModalContext';
// import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
// import ActionButton from '../buttons/ActionButton';
import SearchResult from './SearchResult';
import SearchField from './SearchField';

const query = graphql` 
    {
        localSearchBlogs {
            publicStoreURL
            publicIndexURL
        }
    }
`;

function Search() {
    // const { isSearchModalOpen } = useContext(SearchModalContext);
    const [searchQuery, setSearchQuery] = useState('');
    // const { closeSearchModal } = useContext(SearchModalContext);
    const [blogsIndexStore, setBlogsIndexStore] = useState(null);
    // const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
    // const [authorsIndexStore, setAuthorsIndexStore] = useState(null);
    const data = useStaticQuery(query);

    // useEffect(() => {
    //     if (isSearchModalOpen) {
    //         document.body.style.overflow = 'hidden';
    //         setSearchQuery('');
    //     } else {
    //         document.body.style.overflow = 'initial';
    //     }
    // }, [isSearchModalOpen]);

    const {
        publicStoreURL: blogsPublicStoreURL,
        publicIndexURL: blogsPublicIndexURL,
    } = data.localSearchBlogs;

    // const {
    //     publicStoreURL: categoriesPublicStoreURL,
    //     publicIndexURL: categoriesPublicIndexURL,
    // } = data.localSearchCategories;
    // const {
    //     publicStoreURL: authorsPublicStoreURL,
    //     publicIndexURL: authorsPublicIndexURL,
    // } = data.localSearchAuthors;

    const handleOnFocus = async () => {
        if (blogsIndexStore) return;
        const [
            { data: blogsIndex },
            { data: blogsStore },
            // { data: categoriesIndex },
            // { data: categoriesStore },
            // { data: authorsIndex },
            // { data: authorsStore },
        ] = await Promise.all([
            axios.get(`${blogsPublicIndexURL}`),
            axios.get(`${blogsPublicStoreURL}`),
            // axios.get(`${categoriesPublicIndexURL}`),
            // axios.get(`${categoriesPublicStoreURL}`),
            // axios.get(`${authorsPublicIndexURL}`),
            // axios.get(`${authorsPublicStoreURL}`),
        ]);
        // console.log('w', blogsIndex, blogsStore)
        setBlogsIndexStore({
            index: blogsIndex,
            store: blogsStore,
        });
        // setCategoriesIndexStore({
        //     index: categoriesIndex,
        //     store: categoriesStore,
        // });
        // setAuthorsIndexStore({
        //     index: authorsIndex,
        //     store: authorsStore,
        // });
    };



    // if (!isSearchModalOpen) return null;
    return (
        <div className="container">
            <div className="formStyle2">
                <SearchField
                    value={searchQuery}
                    setValue={setSearchQuery}
                    onFocus={handleOnFocus}
                />
            </div>
            {
                searchQuery &&
                blogsIndexStore && (
                    <div className="Result row row-cols-2 row-cols-sm-3">
                        <SearchResult
                            searchQuery={searchQuery}
                            blogsIndexStore={blogsIndexStore}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default Search;