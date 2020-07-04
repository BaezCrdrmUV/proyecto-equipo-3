import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums } from "../../redux/actions/albums";
import {renderAlbumSongs} from '../../redux/actions/elementToRender'


import './Albums.css';

export class Albums extends Component {


    componentDidMount(){
    this.props.getAlbums();

    console.log(this.props);

   }

   renderAlbums(){
       const albums = this.props.album.albums;
       return(
           <div className="row">
               {
                   albums.map(album => {
                       return <div  key={album.id}>
                            <div className="columnAlbum" 
                                    onClick={
                                        () => this.props.renderAlbumSongs(album.id)
                                    } >
                                <div className="contentAlbum">
                                <img src={album.urlImage} alt="AlbumImage" className="image"/>
                                <h4>{album.name}</h4>
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
