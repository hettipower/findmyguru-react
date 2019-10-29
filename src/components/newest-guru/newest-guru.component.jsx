import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook , faUserClock , faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { selectNewestGurus } from '../../redux/home/home.selector';

import './newest-guru.styles.scss';

const NewestGuruComponent = ({ newestGurus }) => (
    <div className="newestAuditiWrap">
        <div className="container d-flex justify-content-between flex-wrap">
            <div className="titleWrap">
                <h3>Meet our Newest Gurus!</h3>
                <p>They have a brilliant plan for your future. Visit Guru to see it right now.</p>
            </div>

            {
                (newestGurus)?
                (newestGurus.map( guru => 
                <div key={guru.ID} className="audition">
                    <div className="imgWrap" style={{ backgroundImage : `url(${guru.imageUrl})` }}>
                        <h4 className="name">{guru.guruName}</h4>
                    </div>
                    <div className="detailsWrap">
                        <div className="mainSubjects">
                            <div className="sub">
                                <FontAwesomeIcon icon={faBook} />
                                <h4>{guru.subject}</h4>
                            </div>
                            <span className="btn visitGuru">Visit Guru</span>
                        </div>
                        <ul className="details">
                            {
                                (guru.qualification)?
                                (<li><FontAwesomeIcon icon={faGraduationCap} /> {guru.qualification}</li>)
                                : ''
                            }  
                            {
                                (guru.experience)?
                                (<li><FontAwesomeIcon icon={faUserClock} /> {guru.experience}</li>)
                                : ''
                            }     
                        </ul>
                    </div>
                </div> ))
                : ''
            }

        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    newestGurus : selectNewestGurus
});

export default connect(mapStateToProps)(NewestGuruComponent);