import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import {Route} from 'react-router-dom';


const App = (props) => {
  return (
        <div className='appWraper'>
            <Header/>
            <Navbar/>
            <div className='appContent'>

              <Route path="/profile/:userId?" render={ () => <ProfileContainer /> }/>

              <Route path="/dialogs" render={ () => <DialogsContainer /> }/>

              <Route path="/users" render={ () => <UsersContainer /> }/>

            </div>
        </div>
  );
}




export default App;
