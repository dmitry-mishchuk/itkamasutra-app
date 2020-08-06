import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';

const App = () => {
  return (
    <div className='appWraper'>
      <header>
        <img src="https://www.pinclipart.com/picdir/middle/387-3873569_catalyst-react-js-logo-svg-clipart.png"/>
      </header>

      <nav>
        Profile
        News
        music
      </nav>

      <div>
        MainContent
      </div>

      <Header/>
      <Technologies/>
    </div>
  );
}




export default App;
