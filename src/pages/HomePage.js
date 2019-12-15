import React from 'react';


const HomePage = () => (
  <div>
    <p>This is the home page where we can search for boba shops based on location</p>
    <div className="header">
      <input type="text" class="searchBoba" placeholder="Find nearby milk tea, boba spots!" />
   	  <button type="submit" class="searchButton"/>
    </div>
  </div>
);

export default HomePage;