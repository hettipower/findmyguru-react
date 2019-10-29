import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectServices } from '../../redux/home/home.selector';

import './services.styles.scss';

const Services = ({ services }) => (
    <div className="servicesWrap">
        <div className="container d-flex justify-content-between flex-wrap">
            {
                (services)?
                (services.map( service => <div className="service" key={service.title}>
                    <img src={service.iconUrl} alt={service.iconAlt} />
                    {service.title}
                </div> ))
                : ''
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    services : selectServices
});

export default connect(mapStateToProps)(Services);