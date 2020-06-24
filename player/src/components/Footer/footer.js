import React, { Component } from 'react'
import Controls from '../Controls/Controls';
import { connect } from 'react-redux';


class footer extends Component {

    render() {

        const name = this.props.songs.currentSong.title;
        const album = this.props.songs.currentSong.album;

        return (
            <div>
                <div className="metadata">
                    <h3>{name}</h3>
                    <br></br>
                    <h7>{album}</h7>
                </div>



                <Controls></Controls>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        songs : state.songs
    };
};

export default connect (mapStateToProps) (footer);
