import React, { Component } from 'react'
import Hls from 'hls.js';
import './Controls.css';
import {connect} from 'react-redux';


 class Controls extends Component {
    constructor(props) {
        super(props);

        this._onTouchInsidePlayer = this._onTouchInsidePlayer.bind(this)

    }

    play() {


        if (Hls.isSupported() && this.player) {
            const streamURL = this.props.songs.currentSong.urlStreaming;
            console.log(streamURL);
            const video = this.player;


            video.addEventListener('contextmenu', (e) => {


                e.preventDefault();
                return false;
            })


            const hls = new Hls();
            hls.loadSource(streamURL);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        }


    }

    


    _onTouchInsidePlayer() {

        if (this.player.paused) {
            this.player.play();
            console.log(this.player);
        } else {

            this.player.pause();
        }
    }


 
    
    


    render() {

        return (
            <div className='container'>

                {this.play()}
                <audio className="player" controls={true}  onClick={this._onTouchInsidePlayer} ref={(player) => this.player = player}  />
            
            </div>

        )


    }
}



{/* <button className='play-button' onClick={this._onTouchInsidePlayer} ref={(player) => this.player = player}  ></button> */}


const mapStateToProps = (state) => {
    return {
        songs : state.songs
    };
};

export default connect (mapStateToProps) (Controls);
