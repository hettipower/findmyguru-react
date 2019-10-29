import React from 'react';
import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import API from './lib/api';

import { setSiteLogo , setCopyrights , setFooterAbout , setTalkToUs , setSocialMedia , setAllStreams } from './redux/common/common.actions';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){
    const { setSiteLogo , setCopyrights , setFooterAbout , setTalkToUs , setSocialMedia , setAllStreams } = this.props;

    //Common API
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setCopyrights(response.data.copyrights);
      setFooterAbout(response.data.footerAbout);
      setTalkToUs(response.data.talkToUs);
      setSocialMedia(response.data.socialMedia);
      setAllStreams(response.data.allStreames);
    });

  }

  render(){
    return (
      <div className="appicationWrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
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
  setSocialMedia : socialMedia => dispatch(setSocialMedia(socialMedia)),
  setAllStreams : allStreams => dispatch(setAllStreams(allStreams))
});

export default connect(null , mapDispatchToProps)(App);