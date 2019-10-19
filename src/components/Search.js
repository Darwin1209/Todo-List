import React from 'react';

const Search = () => {
    const searchStyle = {
        fontSize: '20px',
        color: 'blue',
    }

    return (
        <input style={searchStyle} placeholder="поиск"/>
    );
};

export default Search;
