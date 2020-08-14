import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import {Route} from 'react-router-dom';


const App = (props) => {
  return (
        <div className='appWraper'>
            <Header/>
            <Navbar/>
            <div className='appContent'>

              <Route path="/profile" render={ () => <Profile /> }/>

              <Route path="/dialogs" render={ () => <DialogsContainer /> }/>

            </div>
        </div>
  );
}




export default App;
