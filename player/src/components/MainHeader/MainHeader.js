import React, { Component } from 'react'
import './MainHeader.css'
import TrackList from '../TrackList/TrackList';

export default class MainHeader extends Component {
    render() {
        return (
            <div className='section-header'>
                <TrackList></TrackList>
            </div>
        )
    }
}
