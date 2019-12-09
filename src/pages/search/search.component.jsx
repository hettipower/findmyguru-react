import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchBanner } from '../../redux/common/common.selectors';
import { selectClasses } from '../../redux/classes/classes.selectors';

import Filters from "../../components/filters/filters.component";
import ClassItem from '../../components/class-item/class-item.component';

import './search.styles.scss';

const SearchPage = ({ searchBanner , classes }) => (
    <div className="searchPageWrap">
        <div className="bannerWrap">
            <img src={searchBanner} alt="Search Banner" />
            <h1>Search Results</h1>
        </div>
        <div className="searchWrap">
            <div className="container d-flex justify-content-between flex-wrap">
                <Filters/>
                <div className="searchResWrapper d-flex justify-content-between flex-wrap">
                    {
                        (classes)?
                        classes.map( 
                            classItem => 
                            <ClassItem 
                                key={classItem.ID}
                                classImage={classItem.classImages[0].imageUrl}
                                title={classItem.title}
                                guruName={classItem.guruName}
                                subject={classItem.subject}
                                batch={classItem.batch}
                                capacity={classItem.classCapacity}
                                category={classItem.classCategory}
                                medium={classItem.medium}
                                city={classItem.city}
                                enroll={classItem.classStatus}
                            /> 
                        )
                        : <div className="noresults alert alert-primary" role="alert">Sorry! Gurus are still registering on Findmyguru.lk.</div>
                    }
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    searchBanner : selectSearchBanner,
    classes : selectClasses
})

export default connect(mapStateToProps)(SearchPage);