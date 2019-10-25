import React from 'react';
import { connect } from 'react-redux';

import API from './lib/api';

import { setSiteLogo , setCopyrights , setFooterAbout , setTalkToUs , setSocialMedia } from './redux/common/common.actions';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){
    const { setSiteLogo , setCopyrights , setFooterAbout , setTalkToUs , setSocialMedia } = this.props;

    //Common API
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setCopyrights(response.data.copyrights);
      setFooterAbout(response.data.footerAbout);
      setTalkToUs(response.data.talkToUs);
      setSocialMedia(response.data.socialMedia)
    });

  }

  render(){
    return (
      <div className="appicationWrapper">
        <Header/>

        <Footer/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSiteLogo : logo => dispatch(setSiteLogo(logo)),
  setCopyrights : copyrights => dispatch(setCopyrights(copyrights)),
  setFooterAbout : footerAbout => dispatch(setFooterAbout(footerAbout)),
  setTalkToUs : talkToUs => dispatch(setTalkToUs(talkToUs)),
  setSocialMedia : socialMedia => dispatch(setSocialMedia(socialMedia))
});

export default connect(null , mapDispatchToProps)(App);