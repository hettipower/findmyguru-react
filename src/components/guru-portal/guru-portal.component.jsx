import React from 'react';
import { Link } from 'react-router-dom';

import './guru-portal.styles.scss';

const GuruPortal = () => (
    <div className="guruPortalWrap">
        <span className="guruPortalBtn">GURU PORTAL</span>
        <div className="guruPortalDropdown">
            <Link className="nav-link" to="/">Guru Login</Link>
            <Link className="nav-link" to="/">Guru Sign Up</Link>
            <Link className="nav-link" to="/">How to become a Guru</Link>
            <Link className="nav-link" to="/">Guru payment plan</Link>
            <Link className="nav-link" to="/">FAQ</Link>
            <Link className="nav-link" to="/">Terms and Conditions</Link>
            <Link className="nav-link" to="/">About Findmyguru.lk</Link>
        </div>
    </div>
);

export default GuruPortal;