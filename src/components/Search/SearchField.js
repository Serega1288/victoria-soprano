import React from 'react';

function SearchField({ value, setValue, onFocus }) {
    return (
        <label>
            <input
                type="text"
                placeholder="Products..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={onFocus && onFocus}
            />
        </label>
    );
}

export default SearchField;