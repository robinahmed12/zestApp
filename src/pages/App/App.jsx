import React from 'react';
import Trending from '../../Sections/Trending/Trending';
import Education from '../../Sections/Education/Education';
import Health from '../../Sections/Health/Health';
import Productivity from '../../Sections/Productivity/Productivity';

const App = () => {
    return (
       <>
       <div>
       <Trending/>
       <Education/>
       <Health/>
       <Productivity/>
       </div>
       </>
    );
};

export default App;