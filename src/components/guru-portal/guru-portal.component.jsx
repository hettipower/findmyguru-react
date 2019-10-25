import React from 'react';
import { Link } from 'react-router-dom';

import portalicon from '../../assets/images/portal-icon.png';
import dropdown from '../../assets/images/drop-down.png';

import './guru-portal.styles.scss';

const GuruPortal = () => (
    <div className="guruPortalWrap">
        <span 
            className="guruPortalBtn" 
            style={{ backgroundImage : `url(${portalicon})` }}
        >
            GURU PORTAL
            <span className="cartIcon" style={{ backgroundImage : `url(${dropdown})` }}></span>
        </span>
        <div className="guruPortalDropdown">
            <Link className="dropdown-item" to="/">Guru Login</Link>
            <Link className="dropdown-item" to="/">Guru Sign Up</Link>
            <Link className="dropdown-item" to="/">How to become a Guru</Link>
            <Link className="dropdown-item" to="/">Guru payment plan</Link>
            <Link className="dropdown-item" to="/">FAQ</Link>
            <Link className="dropdown-item" to="/">Terms and Conditions</Link>
            <Link className="dropdown-item" to="/">About Findmyguru.lk</Link>
        </div>
    </div>
);

export default GuruPortal;