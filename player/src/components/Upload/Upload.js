import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./Upload.css";
import { Link  } from "react-router-dom";


export class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumName: "",
      albumArtist: "",
      albumYear: "",
      songTitle: "",
      songGenre: "",
      songMP3: "",
      albumImage:"",
      albumSongs: [],

      albumID: "",
      imageUrl : ""

    };

    this.sumbitAlbum = this.sumbitAlbum.bind(this);
    this.addSongToAlbum = this.addSongToAlbum.bind(this);
    this.handleAlbumYear = this.handleAlbumYear.bind(this);
    this.handleChangeAlbumArtist = this.handleChangeAlbumArtist.bind(this);
    this.handleChangeAlbumName = this.handleChangeAlbumName.bind(this);
    this.handleChangeSongGenre = this.handleChangeSongGenre.bind(this);
    this.handleChangeSongTitle = this.handleChangeSongTitle.bind(this);
    this.handleChangeMP3 = this.handleChangeMP3.bind(this);
    this.handleChangeAlbumImage = this.handleChangeAlbumImage.bind(this);
  }

  handleChangeAlbumName(e){
      this.setState({albumName: e.target.value});
  }

  handleChangeAlbumArtist(e){
      this.setState({albumArtist: e.target.value});
  }

  handleAlbumYear(e){
      this.setState({albumYear: e.target.value});
  }

  handleChangeSongTitle(e) {
    this.setState({songTitle: e.target.value });
  }

  handleChangeSongGenre(e) {
    this.setState({songGenre: e.target.value});
  }

  handleChangeMP3(e){
    this.setState({songMP3: e.target.files[0]});
  }

  handleChangeAlbumImage(e){
    this.setState({albumImage: e.target.files[0]});
  }



  async uploadAlbum(){

    const settings = {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': "Bearer " + this.props.user.token
      }),

      body: JSON.stringify({
        "albumname": this.state.albumName,
        "artist": this.state.albumArtist,
        "releaseyear": this.state.albumYear,
        "urlImage": this.createImagePath(this.state.albumName)
      })
    }

    try {
      console.log(settings);
      const response = await fetch('http://localhost:80/songs/createAlbum', settings);
      const json = await response.json();
      console.log(json);
      if(json.status === 'ok'){
        this.setState({ albumID: json.album });
        this.prepareSongs();
        await this.uploadMetadata();
      }
    } catch (error) {
      console.log(error);
    }

  }


  async uploadMetadata(){

    const songs = this.state.albumSongs;

    const settings = {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': "Bearer " + this.props.user.token
      }),

      body: JSON.stringify({
        "album" : this.state.albumName,
        "albumId": this.state.albumID,
        "artist" : this.state.albumArtist,
        "year" : this.state.albumYear,
        "songList": songs
      })
    }

    try {
      console.log(songs);

      const response = await fetch('http://localhost:80/songs/createSongs', settings);
      const json = await response.json();
      console.log(json.status === 'ok');
        await this.uploadSongs();
    } catch (error) {
      console.log(error);
    }


  }
  

  async uploadSongs(){


     this.state.albumSongs.forEach(song => {

      let data = new FormData();
      data.append("mp3", song.mp3)
      data.append("title", song.title)

      const settings = {
        method: 'POST',
        headers: new Headers({

          // 'Authorization': "Bearer " + this.props.user.token
        }),
  
        body: data
      }
  
      console.log(song.mp3);
      try {
        fetch('http://localhost:80/uploadsong', settings);

      } catch (error) {
        console.log(error);
      }
    });



  }

  async uploadImage(){



      let data = new FormData();
      data.append("image", this.state.albumImage)
      data.append("title", this.state.albumName)

      const settings = {
        method: 'POST',
        headers: new Headers({
          // 'Authorization': "Bearer " + this.props.user.token
        }),
  
        body: data
      }
  
      try {
        fetch('http://localhost:80/uploadImage', settings);

      } catch (error) {
        console.log(error);
      }
  


  }


    sumbitAlbum(e) {
    e.preventDefault(e);
    if(this.checkImageFile() && this.checkSongList()){
       this.uploadAlbum();

    }
  }

  addSongToAlbum(e) {
    e.preventDefault();
    if (this.checkSongInputs() && this.checkSongFile()) {
      const song = {
        "title": this.state.songTitle,
        "genre": this.state.songGenre,
        "number": this.state.albumSongs.length + 1,
        "mp3": this.state.songMP3
      }
      const listSongs = this.state.albumSongs;
      this.setState({ albumSongs: listSongs.concat([song]) });
      this.clearInputs();

    }
  }

  prepareSongs(){

    const songs = this.state.albumSongs;

    songs.forEach(song => {
      song["urlStreaming"] = this.createAlbumPath(song.title);
      song["urlImage"] = this.createImagePath(this.state.albumName);
      song["albumID"] = this.state.albumID;
    });

    this.setState({ albumSongs: songs });
  }

  createAlbumPath(name){
    var path = "localhost:8081/"+ name+"/" + name+".m3u8";
    return path;
  }

  createImagePath(name){
    var path = "localhost:8081/"+ name+"/"+ name+".jpg";
    return path;
  }



  checkSongList(){
    if(this.state.albumSongs.length <= 0){
    
      alert("add at least one song");
      return false; 
    }
    return true;
  }

  checkSongInputs(){

    var result = true;
    if(!this.state.songTitle ){
      alert("empty name")
      result = false;
    } 
    else if (!this.state.songGenre){

      alert("empty genre")
      result = false;

    }  
    else if (!this.state.songMP3){
      
      alert("empty song")
      result = false;

    }
    return result;
  }

  checkSongFile(){

    // if(!this.state.songMP3.match(/.(mp3)$/i)){
    //   alert("not a mp3 file");
    //   return false
    // }
    return true;
  }

  checkImageFile(){
    if(!this.state.albumImage.match(/.(jpg)$/i)){
      alert("not a image");
      return false;
    }
    return true;
  }

  clearInputs(){
      this.setState({
          songTitle: "",
          songGenre: "",
          songMP3: ""
      });

  }

  renderTable() {
    if (this.state.albumSongs) {
      return (
        <div>
          <br></br>

          <div className="addSong">
            <h4>Songs:</h4>
            <br></br>
            <div>
              {
              this.state.albumSongs.map(song => {
                return <div key={song.number}>
                    <ul className="list-group">
                      <ul className="list-group-item">{song.title}</ul>
                    </ul>
                  </div>               
              }
              )
              }
            </div>

            <br></br>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="uploadForm">
        <br></br>
        <br></br>
        <h2>Upload new album!</h2>
        <br></br>
        <br></br>

        <Form className="album" onSubmit={this.sumbitAlbum}>

          <Form.Group controlId="formAlbumName">
            <Form.Label>Album Name</Form.Label>
            <Form.Control
              type="album"
              placeholder="Enter the album name"
              required
              value={this.state.albumName}
              onChange={this.handleChangeAlbumName}
            />
          </Form.Group>

          <Form.Group controlId="formArtistName">
            <Form.Label>Artist Name</Form.Label>
            <Form.Control
              type="artist"
              placeholder="Enter the Artist name"
              required
              value={this.state.albumArtist}
              onChange={this.handleChangeAlbumArtist}
            />
          </Form.Group>

          <div className="addSong">
            {this.renderTable()}

            <Form className="song">
              <Form.Group controlId="formSongTitle">
                <Form.Label>Song title</Form.Label>
                <Form.Control
                  type="songTitle"
                  placeholder="Enter the song title"
                  value={this.state.songTitle}
                  onChange={this.handleChangeSongTitle}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSongGenre">
                <Form.Label>Song genre</Form.Label>
                <Form.Control
                  type="songGenre"
                  placeholder="Enter the genre"
                  required
                  value={this.state.songGenre}
                  onChange={this.handleChangeSongGenre}
                />
              </Form.Group>
              <Form.Group>
                <Form.File id="song" label="Select song in mp3"   onChange={this.handleChangeMP3} required />
              </Form.Group>

              <Button variant="outline-primary" onClick={this.addSongToAlbum}>
                Add song
              </Button>
            </Form>
          </div>

          <br></br>

          <Form.Group controlId="formYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the year"
              value={this.state.albumYear}
              onChange={this.handleAlbumYear}
              min="0"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.File id="Imagen" label="Select image"  onChange={this.handleChangeAlbumImage} required/>
          </Form.Group>

          <br></br>


          <Button variant="primary" type="submit" onSubmit={this.sumbitAlbum}>
            Save Album
          </Button>

          <Link to="/">
              <Button className="button-back" variant="link" type="button" >
                Back
              </Button>
          </Link>
        </Form>

        <br></br>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
