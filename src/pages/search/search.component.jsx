import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setSorting } from '../../redux/search/search.actions';

import { selectSearchBanner } from '../../redux/common/common.selectors';
import { selectClasses } from '../../redux/classes/classes.selectors';
import { selectSorting } from '../../redux/search/search.selectors';

import Filters from "../../components/filters/filters.component";
import ClassItem from '../../components/class-item/class-item.component';

import './search.styles.scss';

const SearchPage = ({ searchBanner , classes , setSorting , sorting }) => (
    <div className="searchPageWrap">
        <div className="bannerWrap">
            <img src={searchBanner} alt="Search Banner" />
            <h1>Search Results</h1>
        </div>
        <div className="searchWrap">
            <div className="container d-flex justify-content-between flex-wrap">
                <Filters/>
                <div className="searchResWrapper d-flex justify-content-between flex-wrap">
                    <div className="sortingOprions d-flex justify-content-between align-items-center">
                        <div className="count">
                            Recently Added Classes : 
                            {
                                (classes)?
                                classes.length
                                : 0
                            }
                        </div>
                        <div className="sorting">
                            Sorting : 
                            <div className="btn-group ml-2" role="group" aria-label="SortingGroup">
                                <span onClick={() => setSorting('ASC')} className={`${ (sorting === 'ASC') ? 'btn-primary' : 'btn-light' } btn`}>Oldest</span>
                                <span onClick={() => setSorting('DESC')} className={`${ (sorting === 'DESC') ? 'btn-primary' : 'btn-light' } btn`}>Newest</span>
                            </div>
                        </div>
                    </div>
                    {
                        (classes)?
                        classes.map( 
                            classItem => 
                            <ClassItem 
                                key={classItem.ID}
                                classImage={ (classItem.classImages[0]) ? classItem.classImages[0].imageUrl : ''}
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
    classes : selectClasses,
    sorting : selectSorting
});

const mapDispatchToProps = dispatch => ({
    setSorting : sorting => dispatch(setSorting(sorting))
});

export default connect(mapStateToProps , mapDispatchToProps)(SearchPage);