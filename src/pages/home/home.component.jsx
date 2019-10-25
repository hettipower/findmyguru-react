import React from 'react';

import API from '../../lib/api';

import './home.styles.scss';

class HomePage extends React.Component {

    componentDidMount(){

        API.get('common')
        .then(function(response){
            console.log(response.data);
        });
    }

    render(){
        return(
            <div className="homePageWrap"></div>
        )
    }

}

export default HomePage;