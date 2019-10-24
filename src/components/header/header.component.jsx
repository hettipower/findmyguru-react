import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSiteLogo } from '../../redux/common/common.selectors';

import GuruPortal from '../guru-portal/guru-portal.component';

import './header.styles.scss';

const Header = ({ logo }) => (
    <div className="headerWrap">
        <Navbar>
            <Link className="logo-container" to="/">
                <img src={logo} alt="Findmyguru logo" />
            </Link>
            <Nav className="mainMenu">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/guru-academy">Guru Academy</Link>
                <Link className="nav-link" to="/dark-to-light">අඳුරෙන් එළියට</Link>
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </Nav>
            <Nav className="socialMedia">
                <Nav.Item>
                    
                </Nav.Item>
            </Nav>
            <GuruPortal />
        </Navbar>
    </div>
);

const mapStateToProps = createStructuredSelector({
    logo : selectSiteLogo
});

export default connect(mapStateToProps)(Header);