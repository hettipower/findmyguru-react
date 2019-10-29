import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers , faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { selectCounterBanner , selectGurusCount , selectTotalClasses , selectTotalVideos } from '../../redux/home/home.selector';

import './counter.styles.scss';

const Counter = ({ counterBannerUrl , gurusCount , totalClasses , totalVideos }) => (
    <div className="counterWrap">
        <span className="imgOverlay" style={{ backgroundImage : `url(${counterBannerUrl})` }} />
        <div className="container d-flex justify-content-between flex-wrap">

            <div className="counterValue d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon={faUsers} />
                <div className="countContainer">
                    <div className="count">{gurusCount}</div>
                    <h6>Gurus to guide you</h6>
                </div>
            </div>
            <div className="counterValue d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon={faListAlt} />
                <div className="countContainer">
                    <div className="count">{totalClasses}</div>
                    <h6>Classes you need to know about</h6>
                </div>
            </div>
            <div className="counterValue d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon={faYoutube} />
                <div className="countContainer">
                    <div className="count">{totalVideos}</div>
                    <h6>Exciting, educational tutorials</h6>
                </div>
            </div>

        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    counterBannerUrl : selectCounterBanner,
    gurusCount : selectGurusCount,
    totalClasses : selectTotalClasses,
    totalVideos : selectTotalVideos
});

export default connect(mapStateToProps)(Counter);