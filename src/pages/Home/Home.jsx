import React from 'react';
import Slider from '../../components/Slider/Slider';
import Trending from '../../Sections/Trending/Trending';
import App from '../App/App';
import Education from '../../Sections/Education/Education';
import Health from '../../Sections/Health/Health';


const Home = () => {
    return (
       <>
       <Slider/>
       <Trending/>
       <Education/>
       <Health/>
       </>
    );
};

export default Home;