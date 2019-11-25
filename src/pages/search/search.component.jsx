import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchBanner } from '../../redux/common/common.selectors';

import Filters from "../../components/filters/filters.component";

import './search.styles.scss';

const SearchPage = ({ searchBanner }) => (
    <div className="searchPageWrap">
        <div className="bannerWrap">
            <img src={searchBanner} alt="Search Banner" />
            <h1>Search Results</h1>
        </div>
        <div className="searchWrap">
            <div className="container d-flex justify-content-between flex-wrap">
                <Filters/>
                <div className="searchResWrapper d-flex justify-content-between flex-wrap"></div>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    searchBanner : selectSearchBanner
})

export default connect(mapStateToProps)(SearchPage);