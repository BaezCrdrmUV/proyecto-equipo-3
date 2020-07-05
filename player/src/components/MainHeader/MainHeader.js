import React, { Component } from 'react';
import './MainHeader.css';
import TrackList from '../TrackList/TrackList';
import Albums from '../Albums/Albums';
import AlbumTrackList from '../AlbumTrackList/AlbumTrackList';
import GenreSongs from '../GenreSongs/GenreSongs'
import Genres from '../Genres/Genres';
import {connect} from 'react-redux';


 class MainHeader extends Component {





ToRender(){
    switch(this.props.elementToRender.toRender){
        case "renderPlaylists" :{
            return (
                <div>
                    <TrackList></TrackList>
                </div>
            );
        }

        case "renderAlbumLists" :{
            return (
                <div>
                    <Albums></Albums>
                </div>
            )
        }

        case "renderAlbumSongs" :{
            return(
                <div>
                    <AlbumTrackList></AlbumTrackList>
                </div>
            )
        }

        case "renderGenres" : {
            return(
                <div>
                    <Genres></Genres>
                </div>
            )
        }

        case "renderGenreSongs" : {
            return (
                <div>
                   <GenreSongs></GenreSongs>
                </div>
            )
        }

        

        default:
            return null;
    }
    
}

    render() {
        return (
            <div className='section-header'>
                {this.ToRender()}
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        elementToRender : state.elementToRender,
        
    };
};

export default connect (mapStateToProps) (MainHeader);