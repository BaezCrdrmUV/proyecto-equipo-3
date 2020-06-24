import React, { Component } from 'react'
import Hls from 'hls.js';
import './Controls.css';
import {connect} from 'react-redux';
import {currentSong} from '../../redux/actions/songs';



 class Controls extends Component {
    // constructor(props) {
    //     super(props);

    //     this._onTouchInsidePlayer = this._onTouchInsidePlayer.bind(this)

    // }

    play() {


        // console.log(this.props.songs);


        if (Hls.isSupported() && this.player) {
            const streamURL = this.props.songs.currentSong.urlStreaming;
            const song = this.player;
            const hls = new Hls();
            song.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
                hls.loadSource(streamURL);
                hls.attachMedia(song)

            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                song.play();
            });

            

        }
    }
        onSongEnd() {        
        if (this.player.ended) {
            this.nextSong();
        } 
    }



  
    nextSong (){
        const songsToPlay = this.props.songs.listSongs;
        var position = songsToPlay.indexOf(this.props.songs.currentSong);
        var SongsLength = songsToPlay.length;

        if(position +1 < SongsLength ){
            
            const nextSongToPlay = this.props.songs.listSongs[position+1]
            this.props.currentSong(nextSongToPlay);
            console.log(SongsLength, position, "true");
        }else{
            console.log(SongsLength, position, "false");

        }

    }
    
    previousSong(){
        const songsToPlay = this.props.songs.listSongs;
        var position = songsToPlay.indexOf(this.props.songs.currentSong);
        var SongsLength = songsToPlay.length;

        if(position +1 < SongsLength && position !== 0){
            
            const nextSongToPlay = this.props.songs.listSongs[position-1]
            this.props.currentSong(nextSongToPlay);
        }else{

        }
    }
    


    render() {

        return (
            <div className='container'>
                <button className= "previousButton" onClick={ () => this.previousSong() } >
                    <i className="fa fa-chevron-circle-left	">
                    </i>
                </button>
                {this.play()}
                <audio className="player" controls={true}  ref={(player) => this.player = player} onEnded={() => this.onSongEnd()} />
                <button className="nextButton" onClick={ () => this.nextSong()  }>
                    <i className="fa fa-chevron-circle-right"></i>
                </button>
                
            </div>

        )


    }
}



/* <button className='play-button' onClick={this._onTouchInsidePlayer} ref={(player) => this.player = player}  ></button> */


const mapStateToProps = (state) => {
    return {
        songs : state.songs
    };
};


const mapDispatchToProps = { 
    currentSong   
}

export default connect (mapStateToProps, mapDispatchToProps) (Controls);
