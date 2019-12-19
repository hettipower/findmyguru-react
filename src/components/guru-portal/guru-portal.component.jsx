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
            <Link className="dropdown-item" to="/login">Guru Login</Link>
            <Link className="dropdown-item" to="/register">Guru Sign Up</Link>
            <Link className="dropdown-item" to="/for-gurus">How to become a Guru</Link>
            <Link className="dropdown-item" to="/for-gurus">Guru payment plan</Link>
            <Link className="dropdown-item" to="/for-gurus">FAQ</Link>
            <Link className="dropdown-item" to="/for-gurus">Terms and Conditions</Link>
            <Link className="dropdown-item" to="/about-findmyguru-lk">About Findmyguru.lk</Link>
        </div>
    </div>
);

export default GuruPortal;