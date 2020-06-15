import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className="track-search-container">
                <form>
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
