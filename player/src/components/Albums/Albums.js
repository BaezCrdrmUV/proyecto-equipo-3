import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums } from "../../redux/actions/albums";
import {renderAlbumSongs} from '../../redux/actions/elementToRender'


import './Albums.css';

export class Albums extends Component {

    state =  {
        allAlbums: []
    }

    async componentDidMount(){
        
        const settings = {
            method: 'GET',
            headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
    
            })
          }
          try {
            const response =  await fetch('http://localhost:80/songs/getAllAlbums', settings);
            const json = await response.json();
            console.log(json);
            this.props.getAlbums(json);
            this.setState({allAlbums: json.data})
          } catch (error) {
            console.log(error);
          }

    console.log(this.props);

   }

   renderAlbums(){
       const albums = this.state.allAlbums;
       console.log(albums)
       return(
           <div className="row">
               {
                   albums.map(album => {
                       return <div  key={album._id}>
                            <div className="columnAlbum" 
                                    onClick={
                                        () => this.props.renderAlbumSongs(album._id)
                                    } >
                                <div className="contentAlbum">
                                <img src={album.urlImage} alt="AlbumImage" className="image"/>
                                <h4>{album.albumname}</h4>
                                <p>{album.artist}</p>
                                </div>

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
                <h1>Albums</h1>
                <br></br>
                {this.renderAlbums()}   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    album: state.album

})

const mapDispatchToProps = {
    getAlbums,
    renderAlbumSongs

}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
