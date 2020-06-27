import React from 'react';
import './App.css';
import ImageArt from './components/ImageArt/ImageArt';
import { connect } from 'react-redux';

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
      <Switch>
      <PrivateRoute isLoggedIn={ () => this.props.user.loginStatus } path="/" component={Player} exact/>
        <Route path={"/login"} component={Login} exact></Route>
        {/* <Route path="/player" component={Player}></Route> */}
      </Switch>

      <Route path="/register" component={Register} exact>
      </Route>

    </Router>
  );
}



const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn.status === "ok"
    ? <Route { ...props } />
    : <Redirect to="/login" />


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


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);


// export default App;
