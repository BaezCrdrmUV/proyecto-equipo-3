import React, { Component } from 'react'
import './MainHeader.css'
import TrackList from '../TrackList/TrackList';
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
                    <p>albums</p>
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