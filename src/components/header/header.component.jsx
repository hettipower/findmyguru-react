import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link , NavLink } from 'react-router-dom';
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
            <div className="menuContainer">
                <Nav className="mainMenu">
                    <NavLink className="nav-link" activeClassName="currentMenuItem" to="/">Home</NavLink>
                    <NavLink className="nav-link" activeClassName="currentMenuItem" to="/guru-academy">Guru Academy</NavLink>
                    <NavLink className="nav-link" activeClassName="currentMenuItem" to="/dark-to-light">අඳුරෙන් එළියට</NavLink>
                    <NavLink className="nav-link" activeClassName="currentMenuItem" to="/contact-us">Contact Us</NavLink>
                </Nav>
                <Nav className="socialMedia">
                    <Nav.Item>
                        
                    </Nav.Item>
                </Nav>
                <GuruPortal />
            </div>            
        </Navbar>
    </div>
);

const mapStateToProps = createStructuredSelector({
    logo : selectSiteLogo
});

export default connect(mapStateToProps)(Header);