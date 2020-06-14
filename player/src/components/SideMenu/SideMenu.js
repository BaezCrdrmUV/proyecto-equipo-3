import React, { Component } from 'react'

import Playlist from '../playlists/playlist'


export default class SideMenu extends Component {



    render() {
        return (
            <div>
                <h1>xd</h1>
                <ul className="side-menu-container">
                    <li className={"Browse" ? "active side-menu-item" : "side-menu-item"}>
                        Browse
            </li>
                    <li className="side-menu-item radio">Radio</li>
                    <h3 className="user-library-header">Your Library</h3>

                </ul>

                <Playlist></Playlist>
            </div>

        )
    }
}
