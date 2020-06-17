import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {

onSubmit =(event) =>{
    event.preventDefault();
    console.log('uwu');
}

    render() {
        return (
            <div className="track-search-container">
                <form name="searchBar" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        
                    />
                    <button>
                        <i/>
                    </button>
                </form>
            </div>
        );

    }
}
