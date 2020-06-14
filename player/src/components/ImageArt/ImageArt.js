import React, { Component } from 'react';
import './ImageArt.css'

export default class ImageArt extends Component {
    render() {
        return (
            <div >
            <img className='imageblock' src={require('../../example/images/art.jpg')}  alt="album's art"></img>

            </div>
        )
    }
}
