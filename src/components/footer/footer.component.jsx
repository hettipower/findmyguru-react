import React from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFooterAbout , selectTalkToUs , selectCopyrights } from '../../redux/common/common.selectors';

import SocialMediaComp from '../social-media/social-media.component';

import footerBG from '../../assets/images/footer-logo.png';
import Creator from '../../assets/images/mayalogo-black.png';

import './footer.styles.scss';

const Footer = ({ footerAbout , talkToUs , copyrights }) => (
    <div className="footerWrap">
        <div className="topSecWrap">
            <Container className="d-flex justify-content-between flex-wrap" style={{ backgroundImage : `url(${footerBG})` }}>
                <div className="footerBox text-center">
                    <h4>Findmyguru.lk</h4>
                    {footerAbout}
                </div>
                <div className="footerBox menusBox">
                    <h4>For Students and Parents</h4>
                </div>
                <div className="footerBox menusBox">
                    <h4>For Gurus</h4>
                </div>
                <div className="footerBox text-center">
                    <h4>Talk to us</h4>
                    {talkToUs}
                    <SocialMediaComp isFooter/>
                </div>
            </Container>
        </div>
        <div className="bottomSecWrap">
            <Container className="d-flex justify-content-between flex-wrap">
                <div className="copyrights">{copyrights}</div>
                <div className="creator">
                    Website by <a href="maya.lk" target="_blank" rel="noopener noreferrer">
                        <img src={Creator} alt="Maya.lk" />
                    </a>
                </div>
            </Container>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    footerAbout : selectFooterAbout,
    talkToUs : selectTalkToUs,
    copyrights : selectCopyrights
});

export default connect(mapStateToProps)(Footer);