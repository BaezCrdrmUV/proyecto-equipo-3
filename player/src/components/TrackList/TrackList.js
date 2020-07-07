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

  async componentDidMount() {
    this.props.getSelectedPlaylist(this.props.elementToRender.id);
    
    const settings = {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      }),

      body: JSON.stringify({
        "listId": this.props.elementToRender.id
      })
    }
    try {
      const response =  await fetch('http://localhost:80/playlist/GetPlaylist', settings);
      const json = await response.json();
      this.setState({ selectedSongs: json.data.songs});
      const listSongs = await this.getSongsDb();
      console.log(listSongs);
      this.props.getSongs(listSongs);

    } catch (error) {
      console.log(error);
    }

    console.log(this.props.songs.listSongs);

  }

  

  
  async getSongsDb(){

      let songsinSearch = [];
      
      this.state.selectedSongs.forEach( async (song) => {
      const settings = {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
  
        body: JSON.stringify({
          "songId": song
        })
      }
      try {
        const response =  await fetch('http://localhost:80/songs/getSongId', settings);
        const json = await response.json();
        songsinSearch.push(json.data);
      } catch (error) {
        console.log(error);
      }

    });

    console.log("awa" ,songsinSearch);
    return songsinSearch;
  }



  // componentDidUpdate() {
  //   if (this.state.selectedSongs !== this.props.elementToRender.id) {
  //     this.setState({ selectedSongs: this.props.elementToRender.id });
  //     this.props.getSelectedPlaylist(this.props.elementToRender.id);
  //     const selectedPlaylist = this.props.playlists.selectedPlaylist;
  //     const songsInPlaylist = selectedPlaylist.songs;
  //     this.props.getSongs(songsInPlaylist);
  //     console.log(songsInPlaylist);
  //     console.log(this.props);
  //   }
  // }

  playSong(song) {
    this.props.currentSong(song);
  }


  // renderSongOptions(songID){
  //   const playlists = this.props.playlists.playlists;
  //   return (     
  //       <div>
  //           {
  //               playlists.map(playlist => {
  //                   return <Dropdown.Item key={playlist.id} onClick={() => console.log(songID, playlist.id)} >
  //                       {playlist.name}
  //                     </Dropdown.Item>   
  //               })
  //           }
  //       </div>
  //   )
  // }

  renderSongs() {

    const list = this.props.songs.listSongs

    return (
      <div>
        {list.map((song) => {
          return (
            <div className="user-song-item" key={song._id}>
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
                    {/* {this.renderSongOptions(song.id)} */}
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
