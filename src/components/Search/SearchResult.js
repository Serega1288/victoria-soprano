import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import { BlogSearchResultItem } from './SearchResultItem';

function SearchResult({ searchQuery, blogsIndexStore }) {
    const blogsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(blogsIndexStore?.index),
        blogsIndexStore?.store
    );
    if (blogsResult.length === 0) {
        return <h3 className="text-center">No Result Found.</h3>;
    }
    return (
        <>
            {blogsResult.length > 0 && (
                <>
                    {blogsResult.map((result) => (
                        <BlogSearchResultItem key={result.id} product={result} />
                    ))}
                </>
            )}
        </>
    );
}

export default SearchResult;