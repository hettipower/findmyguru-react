import React from 'react';
import { connect } from 'react-redux';

import API from '../../lib/api';

import { 
    setHomePageBanner , 
    setServices , 
    setWelcomeText , 
    setFeatures , 
    setCounterBannerUrl , 
    setTestimonials 
} from '../../redux/home/home.actions';

import HomePageBanner from '../../components/home-banner/home-banner.component';
import Services from '../../components/services/services.component';

import './home.styles.scss';

class HomePage extends React.Component {

    componentDidMount(){

        const { setHomePageBanner , setWelcomeText , setServices , setFeatures , setCounterBannerUrl , setTestimonials } = this.props;

        API.get('home')
        .then(function(response){
            //console.log(response.data);
            setHomePageBanner(response.data.mainBanner);
            setWelcomeText(response.data.welcomeText);
            setServices(response.data.services);
            setFeatures(response.data.features);
            setCounterBannerUrl(response.data.counterBg);
            setTestimonials(response.data.testimonials);
        });
    }

    render(){
        return(
            <div className="homePageWrap">
                <HomePageBanner />
                <Services />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    setHomePageBanner : mainBannerUrl => dispatch(setHomePageBanner(mainBannerUrl)),
    setWelcomeText : welcomeText => dispatch(setWelcomeText(welcomeText)),
    setServices : services => dispatch(setServices(services)),
    setCounterBannerUrl : counterBannerUrl => dispatch(setCounterBannerUrl(counterBannerUrl)),
    setFeatures : features => dispatch(setFeatures(features)),
    setTestimonials : testimonials => dispatch(setTestimonials(testimonials))
});

export default connect(null, mapDispatchToProps)(HomePage);