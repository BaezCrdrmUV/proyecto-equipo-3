import React, { Component } from 'react'

import Playlist from '../playlists/playlist';
import ImageArt from '../ImageArt/ImageArt';


export default class SideMenu extends Component {



    render() {
        return (
            <div>

                <div>
                    <h1>Ougi Music</h1>
                    <ul className="side-menu-container">
                        <li className={"side-menu-item"}>
                            Browse
                        </li>
                        <li className="side-menu-item">Radio</li>
                        <h3 className="user-library-header">Your Library</h3>

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
