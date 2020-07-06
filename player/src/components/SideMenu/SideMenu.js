import React, { Component } from 'react'
import {connect} from 'react-redux';
import {renderAlbumLists} from '../../redux/actions/elementToRender'
import {renderGenres} from '../../redux/actions/elementToRender'
import Playlist from '../playlists/playlist';
import './SideMenu.css'

 class SideMenu extends Component {



    render() {
        return (
            <div>

                <div className="elements">
                    <h1>Ougi Music</h1>
                    <ul className="side-menu-container">
                        <li className={"side-menu-item"}>Home</li>
                        <li className="side-menu-item" onClick={() => {
                                this.props.renderGenres()
                        }} >Genres</li>
                        <br></br>
                        <h2 className="user-library-header" >Your Library</h2>
                        <li className="side-menu-item"  onClick={() => {
                                    this.props.renderAlbumLists() }} >Albums</li>
                        {/* <li className="side-menu-item">Artists</li> */}
                        <li className="side-menu-item">songs</li>

                    </ul>

                    <Playlist></Playlist>
                </div >


            </div>

        )
    }
}

const mapDispatchToProps = { 
    renderAlbumLists,
    renderGenres
    
}

export default connect (null, mapDispatchToProps) (SideMenu);