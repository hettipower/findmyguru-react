import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllStreams , selectAllSubjects , selectAllDistricts , selectClassCategories , selectClassCapacities } from '../../redux/common/common.selectors';
import { selectStream , selectSubject , selectDistrict , selectCity } from '../../redux/search/search.selectors';

import { 
    setStream , 
    setSubject , 
    setDistrict , 
    setBatch , 
    setMedium , 
    setClassCategory , 
    setClassCapacity , 
    setCity , 
    setInstitute , 
    setDay , 
    setSession , 
    setMinPrice , 
    setMaxPrice , 
    setSchoolTeacher , 
    setGuruName 
} from '../../redux/search/search.actions';

import dropIcon from '../../assets/images/drop-down.png';

import './filters.styles.scss';

class Filters extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedSubject : null
        }
    }

    onChangeStream = (e) => {
        const { subjects , setStream } = this.props;
        this.setState({ selectedSubject : subjects[e.target.value] });

        setStream(e.target.value);
    }

    render(){
        const { 
            allStreamsProps ,
            classCategories,
            classCapacities,
            districts , 
            setSubject , 
            setBatch , 
            setMedium , 
            setClassCategory , 
            setClassCapacity , 
            setCity , 
            setInstitute , 
            setDay , 
            setSession , 
            setMinPrice , 
            setMaxPrice , 
            setSchoolTeacher , 
            setGuruName 
        } = this.props;
        const { selectedSubject } = this.state;
        const mediumArr = [ 'English','Sinhala','Tamil' ];


        return(
            <div className="filterWrap">
                <form className="guruFilterForm">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            name="guru"
                            type="text"
                            value=""
                            placeholder="Search by Guru Name"
                            onChange={(e) => setGuruName(e.target.value)}
                        />
                    </div>
                </form>
                <div className="filterWrapper">
                    <h3>Advanced Search</h3>
                    <form id="filterForm">
                        <Accordion id="searchAccordion">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as="a" variant="link" eventKey="0">Subject</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="form-group">
                                            <select 
                                                className="form-control" 
                                                name="stream"
                                                onChange={this.onChangeStream}
                                                style={{ backgroundImage : `url(${dropIcon})` }}
                                            >
                                                <option value="" disabled selected>Select Stream</option>
                                                <option value="">Any</option>
                                                {
                                                    (allStreamsProps)?
                                                    (allStreamsProps.map( stream => <option key={stream} value={stream}>{stream}</option> ))
                                                    : ''
                                                }
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <select 
                                                className="form-control" 
                                                name="subject"
                                                style={{ backgroundImage : `url(${dropIcon})` }}
                                                onChange={(e) => setSubject(e.target.value)}
                                            >
                                                <option value="" disabled selected>Subject</option>
                                                <option value="">Any</option>
                                                {
                                                    (selectedSubject)?
                                                    (selectedSubject.map( subject => <option key={subject} value={subject}>{subject}</option> ))
                                                    : ''
                                                }
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <select 
                                                className="form-control" 
                                                name="batch"
                                                style={{ backgroundImage : `url(${dropIcon})` }}
                                                onChange={(e) => setBatch(e.target.value)}
                                            >
                                                <option value="" disabled selected>Batch</option>
                                                <option value="">Any</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <select 
                                                className="form-control" 
                                                name="medium"
                                                style={{ backgroundImage : `url(${dropIcon})` }}
                                                onChange={(e) => setMedium(e.target.value)}
                                            >
                                                <option value="" disabled selected>Medium</option>
                                                <option value="">Any</option>
                                                {
                                                    mediumArr.map( medium => <option key={medium} value={medium} >{medium}</option> )
                                                }
                                            </select>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as="a" variant="link" eventKey="1">Class Category</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <div className="form-group">
                                            <select
                                                className="form-control" 
                                                name="class_category"
                                                style={{ backgroundImage : `url(${dropIcon})` }}
                                                onChange={(e) => setClassCategory(e.target.value)} 
                                            >
                                                <option value="" disabled selected>Class Category</option>
                                                <option value="">Any</option>
                                                {   
                                                    (classCategories)?
                                                    classCategories.map( category => <option key={category} value={category} >{category}</option> )
                                                    : ''
                                                }
                                            </select>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as="a" variant="link" eventKey="2">Class Capacity</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <div class="form-group">
                                            <select 
                                                class="form-control" 
                                                name="class_capacity"
                                                style={{ backgroundImage : `url(${dropIcon})` }}
                                                onChange={(e) => setClassCapacity(e.target.value)} 
                                            >
                                                <option value="" disabled selected>Class Capacity</option>
                                                <option value="">Any</option>
                                                {   
                                                    (classCapacities)?
                                                    classCapacities.map( capacity => <option key={capacity} value={capacity} >{capacity}</option> )
                                                    : ''
                                                }
                                            </select>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as="a" variant="link" eventKey="3">Location</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as="a" variant="link" eventKey="4">Class Time</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as="a" variant="link" eventKey="5">Class fee</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="school_guru" name="school_guru" value="1" />
                                <label className="custom-control-label" for="school_guru">Guru is a school teacher</label>
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <input type="submit" className="btn submitBtn" value="Search for Guru" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    allStreamsProps : selectAllStreams,
    subjects : selectAllSubjects,
    districts : selectAllDistricts,
    stream : selectStream,
    subject : selectSubject,
    district : selectDistrict,
    city : selectCity,
    classCategories : selectClassCategories , 
    classCapacities : selectClassCapacities
});

const mapDispatchToProps = dispatch => ({
    setStream : (stream) => dispatch(setStream(stream)), 
    setSubject : (subject) => dispatch(setSubject(subject)),
    setDistrict : (district) => dispatch(setDistrict(district)),
    setBatch : (batch) => dispatch(setBatch(batch)), 
    setMedium : (medium) => dispatch(setMedium(medium)), 
    setClassCategory : (classCategory) => dispatch(setClassCategory(classCategory)), 
    setClassCapacity : (classCapacity) => dispatch(setClassCapacity(classCapacity)), 
    setCity : (city) => dispatch(setCity(city)), 
    setInstitute : (institute) => dispatch(setInstitute(institute)), 
    setDay : (day) => dispatch(setDay(day)), 
    setSession : (session) => dispatch(setSession(session)), 
    setMinPrice : (minPrice) => dispatch(setMinPrice(minPrice)), 
    setMaxPrice : (maxPrice) => dispatch(setMaxPrice(maxPrice)), 
    setSchoolTeacher : (guruName) => dispatch(setSchoolTeacher(guruName)), 
    setGuruName : (guruName) => dispatch(setGuruName(guruName)),
});

export default connect(mapStateToProps , mapDispatchToProps)(Filters);