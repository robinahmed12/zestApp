import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Trending from "../../Sections/Trending/Trending";
import Education from "../../Sections/Education/Education";
import Health from "../../Sections/Health/Health";
import Productivity from "../../Sections/Productivity/Productivity";
import Launch from "../../Sections/Launch/Launch";

const Home = () => {
  return (
    useEffect(() => {
      document.title = "ZestApps | Home";
    }),
    (
      <>
        <div>
          <Slider />
          <Launch />
          <Trending />
          <Education />
          <Health />
          <Productivity />
        </div>
      </>
    )
  );
};

export default Home;
