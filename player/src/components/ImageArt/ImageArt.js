import React, { Component } from 'react';
import './ImageArt.css'

export default class ImageArt extends Component {


      
    // async componentDidMount(){
    //     const img = await fetch('https://i.imgur.com/s6ru3Ce.jpg');
    // }
//'../../example/images/art.jpg'

    render() {
        return (
            <div >
            <img className='imageblock' src='https://i.imgur.com/s6ru3Ce.jpg'  alt="album's art"></img>

            </div>
        )
    }
}
