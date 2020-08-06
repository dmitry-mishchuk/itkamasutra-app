import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <div className='appWraper'>

            <Header/>
            <Navbar/>
            <div className='appContent'>
              <Route path="/profile" component={Profile}/>
              <Route path="/dialogs" component={Dialogs}/>
            </div>

        </div>

    </BrowserRouter>
  );
}




export default App;
