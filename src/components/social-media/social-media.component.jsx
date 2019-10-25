import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram , faLinkedinIn , faYoutube } from '@fortawesome/free-brands-svg-icons';

import { selectSocialMedia } from '../../redux/common/common.selectors';

import './social-media.styles.scss';

const SocialMediaComp = ({ socialMedia , isFooter }) => (
    <ul className={`socialMedia nav ${isFooter ? 'footerSocial' : ''}`}>
        <li className="nav-item">
            {
                socialMedia ?
                (<a className="nav-link" href={socialMedia.facebook} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>)
                : ''
            }            
        </li>
        <li className="nav-item">
            {
                socialMedia ?
                (<a className="nav-link" href={socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>)
                : ''
            }            
        </li>
        {
            (isFooter) ?
            (<li className="nav-item">
                {
                    socialMedia ?
                    (<a className="nav-link" href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>)
                    : ''
                }
            </li>)
            : ''
        }
        <li className="nav-item">
            {
                socialMedia ?
                (<a className="nav-link" href={socialMedia.youtube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>)
                : ''
            }
        </li>
    </ul>
);

const mapStateToProps = createStructuredSelector({
    socialMedia : selectSocialMedia
});

export default connect(mapStateToProps)(SocialMediaComp);