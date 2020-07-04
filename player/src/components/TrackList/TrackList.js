import React, { Component } from "react";
import "./TrackList.css";
import { connect } from "react-redux";
import { getSelectedPlaylist } from "../../redux/actions/playlists";
import { getSongs } from "../../redux/actions/songs";
import { currentSong } from "../../redux/actions/songs";
import { Dropdown } from "react-bootstrap";


class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongs: "",
    };
  }

  componentDidMount() {
    this.props.getSelectedPlaylist(this.props.elementToRender.id);
    const selectedPlaylist = this.props.playlists.selectedPlaylist;
    const songsInPlaylist = selectedPlaylist.songs;
    this.props.getSongs(songsInPlaylist);
    console.log(songsInPlaylist);
    console.log(this.props);
    this.setState({ selectedSongs: this.props.elementToRender.id });
  }

  componentDidUpdate() {
    if (this.state.selectedSongs !== this.props.elementToRender.id) {
      this.setState({ selectedSongs: this.props.elementToRender.id });
      this.props.getSelectedPlaylist(this.props.elementToRender.id);
      const selectedPlaylist = this.props.playlists.selectedPlaylist;
      const songsInPlaylist = selectedPlaylist.songs;
      this.props.getSongs(songsInPlaylist);
      console.log(songsInPlaylist);
      console.log(this.props);
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

              <div className="song-album">
                <p>{song.album}</p>
              </div>

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

  };
};

const mapDispatchToProps = {
  getSelectedPlaylist,
  getSongs,
  currentSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
