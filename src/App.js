import React from 'react';
import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import API from './lib/api';

import { 
  setSiteLogo , 
  setCopyrights , 
  setFooterAbout , 
  setTalkToUs , 
  setSocialMedia , 
  setAllSubjects , 
  setAllLocations , 
  setSearchBanner,
  setClassCategories , 
  setClassCapacities
} from './redux/common/common.actions';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.component';
import SearchPage from './pages/search/search.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){
    const { 
      setSiteLogo , 
      setCopyrights , 
      setFooterAbout , 
      setTalkToUs , 
      setSocialMedia , 
      setAllSubjects , 
      setAllLocations , 
      setSearchBanner ,  
      setClassCategories , 
      setClassCapacities 
    } = this.props;

    //Common API
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setCopyrights(response.data.copyrights);
      setFooterAbout(response.data.footerAbout);
      setTalkToUs(response.data.talkToUs);
      setSocialMedia(response.data.socialMedia);
      setAllSubjects(response.data.allSubjects);
      setAllLocations(response.data.allLocations);
      setSearchBanner(response.data.searchPageBanner);
      setClassCategories(response.data.allClassCategory);
      setClassCapacities(response.data.allClassCapacity);
    });

  }

  render(){
    return (
      <div className="appicationWrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
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
  setAllSubjects : allSubjects => dispatch(setAllSubjects(allSubjects)),
  setAllLocations : allLocations => dispatch(setAllLocations(allLocations)),
  setSearchBanner : searchBanner => dispatch(setSearchBanner(searchBanner)),
  setClassCategories : classCategories => dispatch(setClassCategories(classCategories)),
  setClassCapacities : classCapacities => dispatch(setClassCapacities(classCapacities))
});

export default connect(null , mapDispatchToProps)(App);