import React, { Component } from "react";
import "./AlbumTrackList.css";
import { connect } from "react-redux";
import { getSelectedPlaylist } from "../../redux/actions/playlists";
import { getSelectedAlbum } from "../../redux/actions/albums";
import { getSongs } from "../../redux/actions/songs";
import { currentSong } from "../../redux/actions/songs";
import { Dropdown } from "react-bootstrap";


class AlbumTrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongs: "",
    };
  }

  async componentDidMount() {
    console.log(this.props);
    this.props.getSelectedAlbum(this.props.elementToRender.id);
    const selectedPlaylist = this.props.album.selectedAlbum;

    const settings = {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      }),

      body: JSON.stringify({
        "albumId": this.props.elementToRender.id
      })
    }
    try {
      const response =  await fetch('http://localhost:80/songs/getSongsByAlbum', settings);
      const json = await response.json();
      console.log(json);
      this.props.getSongs(json.data);
      console.log(this.props);
      this.setState({ selectedSongs: json.data});
    } catch (error) {
      console.log(error);
    }



  }


  playSong(song) {
    this.props.currentSong(song);
  }


  renderSongOptions(songID){
    const playlists = this.props.playlists.playlists;
    return (     
        <div>
            {
                playlists.map(playlist => {
                    return <Dropdown.Item key={playlist.id} onClick={() => console.log(songID, playlist.id)} >
                        {playlist.name}
                      </Dropdown.Item>   
                })
            }
        </div>
    )
  }

  renderSongs() {
    return (
      <div>
        {this.props.songs.listSongs.map((song) => {
          return (
            <div className="user-song-item" key={song.id}>
              <button
                className="play-button"
                onClick={() => this.playSong(song)}
              ></button>
              <div className="song-title">
                <p>{song.title}</p>
              </div>

              <div className="song-artist">
                <p>{song.artist}</p>
              </div>

              {/* <div className="song-album">
                <p>{song.album}</p>
              </div> */}

              {/* <div className="song-length">
                <p>{song.duration}</p>
              </div> */}

              <div className="optionButton">
                <Dropdown>

                  <Dropdown.Toggle  split variant="light" id="dropdown-split-basic" />


                  <Dropdown.Menu>
                  <Dropdown.Item>Add to Queue</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Add to playlist:</Dropdown.Header>
                    {this.renderSongOptions(song.id)}
                  </Dropdown.Menu>

                </Dropdown>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="section-title">Album</div>
        <div className="song-header-container">
          <div className="song-title-header">
            <p>Title</p>
          </div>
          <div className="song-artist-header">
            <p>Artist</p>
          </div>
          {/* <div className="song-album-header">
            <p>Album</p>
          </div> */}
          {/* <div className="song-length-header">
            <p>Duration</p>
          </div> */}
        </div>

        {this.renderSongs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    elementToRender: state.elementToRender,
    playlists: state.playlists,
    songs: state.songs,
    album :state.album

  };
};

const mapDispatchToProps = {
  getSelectedPlaylist,
  getSongs,
  currentSong,
  getSelectedAlbum
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTrackList);
