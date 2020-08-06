import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import {Route} from 'react-router-dom';


const App = (props) => {
  return (
        <div className='appWraper'>
            <Header/>
            <Navbar/>
            <div className='appContent'>
              <Route path="/profile" render={
                () => <Profile profalePage={props.state.profalePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>
              <Route path="/dialogs" render={
                () => <Dialogs dialogs={props.state.dialogPage.dialogs} massages={props.state.dialogPage.massages}/> }/>
            </div>
        </div>
  );
}




export default App;
