import React, { Component } from 'react'

import Playlist from '../playlists/playlist';
import ImageArt from '../ImageArt/ImageArt';
import './SideMenu.css'

export default class SideMenu extends Component {



    render() {
        return (
            <div>

                <div>
                    <h1>Ougi Music</h1>
                    <ul className="side-menu-container">
                        <li className={"side-menu-item"}>Home</li>
                        <li className="side-menu-item">Genres</li>
                        <br></br>
                        <h2 className="user-library-header">Your Library</h2>
                        <li className="side-menu-item">Albums</li>
                        <li className="side-menu-item">Artists</li>
                        <li className="side-menu-item">songs</li>

                    </ul>

                    <Playlist></Playlist>
                </div >

                <div>
                    <ImageArt ></ImageArt>

                </div>

            </div>

        )
    }
}
