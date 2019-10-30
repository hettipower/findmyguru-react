import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllStreams , selectAllSubjects , selectAllDistricts } from '../../redux/common/common.selectors';

import './search-form.styles.scss';
import streamIcon from '../../assets/images/exam-icon.png';
import locationIcon from '../../assets/images/location.png';
import subjectIcon from '../../assets/images/subject.png';
import dropIcon from '../../assets/images/drop-down.png';

class SearchForm extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedSubject : null
        }
    }

    onChangeStream = (e) => {
        const { subjects } = this.props;
        this.setState({ selectedSubject : subjects[e.target.value] });
    }

    handleSubmit = async event => {
        event.preventDefault();
        
    }

    render(){
        const { allStreamsProps , districts } = this.props;
        const { selectedSubject } = this.state;
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <img src={streamIcon} alt="stream" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        as="select" 
                        defaultValue="" 
                        onChange={this.onChangeStream} 
                        name="stream"
                        style={{ backgroundImage : `url(${dropIcon})` }}
                    >
                        <option value="" disabled="">Select Stream</option>
                        {
                            (allStreamsProps)?
                            (allStreamsProps.map( stream => <option key={stream} value={stream}>{stream}</option> ))
                            : ''
                        }
                    </FormControl>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <img src={subjectIcon} alt="subject" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        as="select" 
                        defaultValue="" 
                        name="subject"
                        style={{ backgroundImage : `url(${dropIcon})` }}
                    >
                        <option value="" disabled="">Select Subject</option>
                        {
                            (selectedSubject)?
                            (selectedSubject.map( subject => <option key={subject} value={subject}>{subject}</option> ))
                            : ''
                        }
                    </FormControl>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <img src={locationIcon} alt="location" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        as="select" 
                        defaultValue="" 
                        name="district"
                        style={{ backgroundImage : `url(${dropIcon})` }}
                    >
                        <option value="" disabled="">Select Disrict</option>
                        {
                            (districts)?
                            (districts.map( district => <option key={district} value={district}>{district}</option> ))
                            : ''
                        }
                    </FormControl>
                </InputGroup>
                <button type="submit" className="btn searchBtn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    allStreamsProps : selectAllStreams,
    subjects : selectAllSubjects,
    districts : selectAllDistricts
});

export default connect(mapStateToProps)(SearchForm);