import React from 'react';
import { Link } from 'react-router-dom';

import './class-item.styles.scss';

const ClassItem = ({ classImage , title , guruName , subject , batch , capacity , category , medium , city , enroll }) => (
    <div className="guruClass">
        <div className="classImg" style={{ backgroundImage : `url(${classImage})` }}></div>
        <h3><Link to="/">{title}</Link></h3>
        <div className="guruName"><i className="fas fa-user"></i> {guruName}</div>
        <div className="subject d-flex justify-content-between">
            <div className="sub"><i className="fas fa-book"></i> {subject}</div>
            <div className="batch">{batch}</div>
        </div>
        <div className="classDetails d-flex justify-content-between flex-wrap">
            <div className="detail"><i className="fas fa-warehouse"></i> {capacity}</div>
            <div className="detail"><i className="fas fa-user"></i> {category}</div>
            <div className="detail"><i className="fas fa-language"></i> {medium}</div>
            <div className="detail"><i className="fas fa-map-marker-alt"></i> {city}</div>
        </div>

        <div className="feesWrap d-flex justify-content-between">
            <div className="fee">{enroll}</div>
            <Link className="btn visitGuru" to="/">Visit Guru</Link>
        </div>
    </div>
);

export default ClassItem;