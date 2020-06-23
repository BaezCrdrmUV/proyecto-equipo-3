import React, { Component } from 'react';
import './ImageArt.css'
import {connect} from 'react-redux';


 class ImageArt extends Component {





     loadImage() {

         const imageURL = this.props.songs.currentSong.urlImage;

         return imageURL;

     }

     noImage(){
        const imageURL = './noimage.jpg';
        return imageURL;
     }



    render() {
        return (
            <div >
            <img className='imageblock' src={this.loadImage()}  alt="album's art"  ></img>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        songs : state.songs
    };
};



export default connect (mapStateToProps) (ImageArt);

