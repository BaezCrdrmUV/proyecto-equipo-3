import React, { Component } from 'react'
import './Header.css'
import Search from '../Search/Search';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";



export default class header extends Component {
    render() {
        return (
            <div className='header'>
                <Search></Search>
                <Link to ="/upload">
                    <Button variant="primary">Upload </Button>     
                </Link>
            </div>
        )
    }
}
