import React, { Component } from 'react'
import Hls from 'hls.js';
import './Controls.css';

export default class Controls extends Component {
    constructor(props) {
        super(props);

        this._onTouchInsidePlayer = this._onTouchInsidePlayer.bind(this)

    }
    componentDidMount() {


        if (Hls.isSupported() && this.player) {
            const streamURL = `http://localhost:4000/static/Heretics/Heretics.m3u8`;
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
        } else {

            this.player.pause();
        }
    }
    render() {

        return (
            <div className='container'>

                <button className='play-button' onClick={this._onTouchInsidePlayer} ref={(player) => this.player = player}  ></button>
                <video controls={false} onClick={this._onTouchInsidePlayer} ref={(player) => this.player = player} autoPlay={true} hidden/>
            </div>
        )


    }
}
