import React from 'react';
import Slider from '../../components/Slider/Slider';
import Trending from '../../Sections/Trending/Trending';
import App from '../App/App';
import Education from '../../Sections/Education/Education';
import Health from '../../Sections/Health/Health';
import Productivity from '../../Sections/Productivity/Productivity';
import Launch from '../../Sections/Launch/Launch';


const Home = () => {
    return (
       <>
       <Slider/>
       <Launch/>
       <Trending/>
       <Education/>
       <Health/>
       <Productivity/>
       </>
    );
};

export default Home;