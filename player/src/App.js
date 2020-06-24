import React from 'react';
import './App.css';
import ImageArt from './components/ImageArt/ImageArt';



import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';
import SideMenu from './components/SideMenu/SideMenu';
import store from './redux/store'


function App() {

  console.log(store.getState());
  return (
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
      <div className = 'footer'>
      <Footer></Footer>

      </div>
    </div>
  );
}




export default App;
