import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./Upload.css";

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

    };

    this.sumbitAlbum = this.sumbitAlbum.bind(this);
    this.addSongToAlbum = this.addSongToAlbum.bind(this);
    this.handleAlbumYear = this.handleAlbumYear.bind(this);
    this.handleChangeAlbumArtist = this.handleChangeAlbumArtist.bind(this);
    this.handleChangeAlbumName = this.handleChangeAlbumName.bind(this);
    this.handleChangeSongGenre = this.handleChangeSongGenre.bind(this);
    this.handleChangeSongTitle = this.handleChangeSongTitle.bind(this);
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



  sumbitAlbum(e) {
    e.preventDefault(e);
    console.log("sumbit album");
    
  }

  addSongToAlbum(e) {
    e.preventDefault();
    const song ={
        "title": this.state.songTitle,
        "genre": this.state.songGenre,
        "number": this.state.albumSongs.length + 1
    }
    const listSongs = this.state.albumSongs;
    this.setState({albumSongs: listSongs.concat([song]) });
    console.log(this.state.albumSongs);
    this.clearInputs();
  }

  clearInputs(){
      this.setState({
          songTitle: "",
          songGenre: "",
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
                  required
                  value={this.state.songTitle}
                  onChange={this.handleChangeSongTitle}
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
                <Form.File id="song" label="Select song in mp3" required />
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
              type="year"
              placeholder="Enter the year"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.File id="Imagen" label="Select image" accept="image/*" required/>
          </Form.Group>

          <Button variant="primary" type="submit" onSubmit={this.sumbitAlbum}>
            Save Album
          </Button>
        </Form>

        <br></br>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
