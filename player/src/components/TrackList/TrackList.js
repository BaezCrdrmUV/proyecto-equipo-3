import React, { Component } from 'react';
import './TrackList.css';
import {connect} from 'react-redux';
import {getSelectedPlaylist} from'../../redux/actions/playlists';
import {getSongs} from '../../redux/actions/songs';
import {currentSong} from '../../redux/actions/songs';


 class TrackList extends Component {

   

    componentDidMount(){
        this.props.getSelectedPlaylist(this.props.elementToRender.id);
        const selectedPlaylist = this.props.playlists.selectedPlaylist;
        const songsInPlaylist = selectedPlaylist.songs; 
        this.props.getSongs(songsInPlaylist);
        console.log(songsInPlaylist);
        console.log(this.props);

    }
 

    playSong(song){
 
        this.props.currentSong(song);

    }

    renderSongs() {
        return (
            <div>
                {
                    this.props.songs.listSongs.map(song => {
                        return <div className="user-song-item" key={song.id}>
                            <button className="play-button" onClick={() => this.playSong(song)}>

                            </button>                           
                            <div className="song-title">
                                <p>{song.title}</p>
                            </div>

                            <div className="song-artist">
                                <p>{song.artist}</p>
                            </div>

                            <div className="song-album">
                                <p>{song.album}</p>
                            </div>

                            <div className="song-length">
                                <p>{song.duration}</p>
                            </div>

                        </div>
                    })
                }
            </div>
        )
    }

    render() {
        return (
            

            <div>
                <div className="section-title">Playlist</div>
                <div className="song-header-container">
                    <div className="song-title-header">
                        <p>Title</p>
                    </div>
                    <div className="song-artist-header">
                        <p>Artist</p>
                    </div>
                    <div className="song-album-header">
                        <p>Album</p>
                    </div>
                    <div className="song-length-header">
                        <p>Duration</p>
                    </div>
                </div>

                {this.renderSongs()}
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        elementToRender : state.elementToRender,
        playlists : state.playlists,
        songs : state.songs
        
        
    };
};



const mapDispatchToProps = { 
    
    getSelectedPlaylist,
    getSongs,
    currentSong
    

}



export default connect (mapStateToProps, mapDispatchToProps) (TrackList);
