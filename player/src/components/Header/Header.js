import React, { Component } from 'react'
import './Header.css'
import Search from '../Search/Search';

export default class header extends Component {
    render() {
        return (
            <div className='header'>
                <Search></Search>
            </div>
        )
    }
}
