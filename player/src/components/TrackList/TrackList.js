import React, { Component } from 'react';
import './TrackList.css';


import listSongsExample from '../../example/song.json'

export default class TrackList extends Component {

    state = {
        songs: []
    }
    async componentDidMount() {
        const data = listSongsExample;
        this.setState({ songs: data })
    }

    renderSongs() {
        return (
            <div>
                {
                    this.state.songs.map(song => {
                        return <div className="user-song-item" key={song.id}>
                            <button className="play-button" onClick={() => console.log('uwu')}>

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
