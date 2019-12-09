import React from 'react';
import { Route } from 'react-router-dom';

import GuruSidebarNavi from '../../components/guru-sidebar-navi/guru-sidebar-navi.component';
import MyClasses from '../../components/my-classes/my-classes.component';

import './guru-account.styles.scss';

const GuruAccount = ({ match }) => (
    <div className="guruAccountWrap">
        <div className="bannerWrap"></div>
        <div className="accountWrap">
            <div className="container d-flex justify-content-between flex-wrap">
                <GuruSidebarNavi/>
                <Route exact path={`${match.path}`} component={MyClasses} />
            </div>
        </div>
    </div>
);

export default GuruAccount;

