import React from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import {Route} from 'react-router-dom';


const App = (props) => {
  return (
        <div className='appWraper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='appContent'>

              <Route path="/profile/:userId?" render={ () => <ProfileContainer /> }/>

              <Route path="/dialogs" render={ () => <DialogsContainer /> }/>

              <Route path="/users" render={ () => <UsersContainer /> }/>

              <Route path="/login" render={ () => <Login /> }/>

            </div>
        </div>
  );
}




export default App;
