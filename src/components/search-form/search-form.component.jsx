import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './search-form.styles.scss';
import streamIcon from '../../assets/images/exam-icon.png';
import locationIcon from '../../assets/images/location.png';
import subjectIcon from '../../assets/images/subject.png';

class SearchForm extends React.Component {

    render(){
        return(
            <form className="search-form">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <img src={streamIcon} alt="stream" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <img src={subjectIcon} alt="subject" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <img src={locationIcon} alt="location" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                    />
                </InputGroup>
                <button type="submit" className="btn searchBtn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <p><strong>OR</strong></p>
            </form>
        )
    }

}

export default SearchForm;