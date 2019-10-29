import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFeatures } from '../../redux/home/home.selector';

import './features.styles.scss';

const Features = ({ features }) => (
    <div className="featuresWrap">
        <div className="container">
            {
                (features)?
                (features.map( feature => <div className="feature text-center" key={feature.title}>
                    <img src={feature.iconUrl} alt={feature.iconAlt} />
                    <h4>{feature.title}</h4>
                    {feature.content}
                </div> ))
                : ''
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    features : selectFeatures
});

export default connect(mapStateToProps)(Features);