import React from 'react';
import { connect } from 'react-redux';

import API from './lib/api';

import { setSiteLogo } from './redux/common/common.actions';

import Header from './components/header/header.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){
    const { setSiteLogo } = this.props;

    //Common API
    API.get('common')
    .then(function(response){
      console.log(response.data);
      setSiteLogo(response.data.siteLogo);
    });

  }

  render(){
    return (
      <div className="appicationWrapper">
        <Header/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSiteLogo : logo => dispatch(setSiteLogo(logo))
});

export default connect(null , mapDispatchToProps)(App);