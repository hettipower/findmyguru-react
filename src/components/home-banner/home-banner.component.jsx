import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import SearchForm from '../search-form/search-form.component';

import { selectHomeBannerUrl , selectWelcomeText } from '../../redux/home/home.selector';

import './home-banner.styles.scss';

const HomePageBanner = ({ mainBannerUrl , welcomeText }) => (
    <div className="mainBannerWrap">
        <div className="mainBanner" style={{ backgroundImage : `url(${mainBannerUrl})` }}/>
        <div className="searchWrapper">
            <div className="welcomeText text-center" dangerouslySetInnerHTML={{__html : welcomeText}}/>
            <div className="searchWrap text-center">
                <SearchForm />                
                <p><strong>OR</strong></p>
                <p><Link className="btn otherBtn" to="/search">Try Advance Search</Link></p>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    mainBannerUrl : selectHomeBannerUrl,
    welcomeText : selectWelcomeText
});

export default connect(mapStateToProps)(HomePageBanner);