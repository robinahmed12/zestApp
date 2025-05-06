import React from "react";
import Slider from "../../components/Slider/Slider";
import Trending from "../../Sections/Trending/Trending";
import Education from "../../Sections/Education/Education";
import Health from "../../Sections/Health/Health";
import Productivity from "../../Sections/Productivity/Productivity";
import Launch from "../../Sections/Launch/Launch";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ZestApps | Home</title>
      </Helmet>
      <Slider />
      <Launch />
      <Trending />
      <Education />
      <Health />
      <Productivity />
    </>
  );
};

export default Home;
