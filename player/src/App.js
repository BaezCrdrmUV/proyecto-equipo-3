import React from 'react';
import './App.css';
import ImageArt from './components/ImageArt/ImageArt';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';
import SideMenu from './components/SideMenu/SideMenu';
import Login from './components/login/login';
import Register from './components/Register/Register'

function App() {
  return (
    <Router>
      <Route path={"/login"}>
        <Login class="login"></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/player">
        <Player></Player>
      </Route>
    </Router>
  );
}





function Player() {
  return (
    <div>
      <div className="App">

        <div className='app-container'>

          <div className='left-side-section'>
            <SideMenu></SideMenu>
          </div >
          <div>
            <ImageArt ></ImageArt>
          </div>
          <div className="main-section">
            <Header></Header>
            <div className='main-section-container' >
              <MainHeader></MainHeader>
            </div>
          </div>
        </div>
        <div className='footer'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}




export default App;
