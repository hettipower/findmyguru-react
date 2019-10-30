import React from 'react';

import './search.styles.scss';

const SearchPage = ({ match }) => (
    <div className="searchPageWrap">
        {console.log('match' , match)}
        <div className="bannerWrap">
            <img src="" alt="" />
            <h1>Search Results</h1>
        </div>
        <div className="searchWrap">
            <div className="container d-flex justify-content-between flex-wrap">
                <div className="filterWrap"></div>
                <div className="searchResWrapper d-flex justify-content-between flex-wrap"></div>
            </div>
        </div>
    </div>
);

export default SearchPage;