import React from 'react';
import { connect } from 'react-redux';

import API from '../../lib/api';

import { 
    setHomePageBanner , 
    setServices , 
    setWelcomeText , 
    setFeatures , 
    setCounterBannerUrl , 
    setTestimonials,
    setNewestGurus,
    setGurusCount,
    setTotalClasses,
    setTotalVideos
} from '../../redux/home/home.actions';

import HomePageBanner from '../../components/home-banner/home-banner.component';
import Services from '../../components/services/services.component';
import Counter from '../../components/counter/counter.component';
import NewestGuruComponent from '../../components/newest-guru/newest-guru.component';
import Features from '../../components/features/features.component';
import Testimonials from '../../components/testimonials/testimonials.component';

import './home.styles.scss';

class HomePage extends React.Component {

    componentDidMount(){

        const { 
            setHomePageBanner , 
            setWelcomeText , 
            setServices , 
            setFeatures , 
            setCounterBannerUrl , 
            setTestimonials , 
            setNewestGurus,
            setGurusCount,
            setTotalClasses,
            setTotalVideos
        } = this.props;

        API.get('home')
        .then(function(response){
            //console.log(response.data);
            setHomePageBanner(response.data.mainBanner);
            setWelcomeText(response.data.welcomeText);
            setServices(response.data.services);
            setFeatures(response.data.features);
            setCounterBannerUrl(response.data.counterBg);
            setTestimonials(response.data.testimonials);
            setNewestGurus(response.data.newestGuru);
            setGurusCount(response.data.guruCount);
            setTotalClasses(response.data.totalClasses);
            setTotalVideos(response.data.totalVideos);
        });
    }

    render(){
        return(
            <div className="homePageWrap">
                <HomePageBanner />
                <Services />
                <NewestGuruComponent />
                <Counter />
                <Features/>
                <Testimonials/>
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
    setTestimonials : testimonials => dispatch(setTestimonials(testimonials)),
    setNewestGurus : newestGurus => dispatch(setNewestGurus(newestGurus)),
    setGurusCount : gurusCount => dispatch(setGurusCount(gurusCount)),
    setTotalClasses : totalClasses => dispatch(setTotalClasses(totalClasses)),
    setTotalVideos : totalVideos => dispatch(setTotalVideos(totalVideos))
});

export default connect(null, mapDispatchToProps)(HomePage);