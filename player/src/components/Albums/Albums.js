import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums } from "../../redux/actions/albums";

import './Albums.css';

export class Albums extends Component {


    componentDidMount(){
    this.props.getAlbums();

    console.log(this.props);

   }

   renderAlbums(){
       const albums = this.props.album.albums;
       return(
           <div>
               {
                   albums.map(album => {
                       return <div key={album.id}>
                           <p>{album.name}</p>
                        </div>
                   })
               }
           </div>
       )
   }


    render() {
        return (
            <div>
                <p>albums</p>
                {this.renderAlbums()}   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    album: state.album

})

const mapDispatchToProps = {
    getAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
