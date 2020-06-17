import React, { Component } from 'react'
import "./playlist.css"
import {connect} from 'react-redux';
// import playlistsExample from '../../example/playlist.json'
import {renderPlaylists} from '../../redux/actions/elementToRender'


class playlist extends Component {

    // state =  {
    //     playlists: []
    // }

    // async componentDidMount() {
    //     const data = playlistsExample;
    //     this.setState({ playlists: data })
    // }



    GetRenderPlayLists () {



        const playlists = this.props.userplaylists.playlists;
        
        return (     
            <div>
                {
                    playlists.map(playlist => {

                        return <div key={playlist.id} > 
                            <div className="playlist-item" 
                                onClick={() => {
                                    this.props.renderPlaylists(playlist.id);
                                }} 
                            >
                                <p>{playlist.name}</p>
                            </div>
                            

                        </div>
                    })
                }
            </div>
        )
    }



    render() {

        return (
            <div className="playlist" >
                <h2>Playlists</h2>
                <br></br>
                <button className="fa fa-plus">    New Playlist</button>
                <br></br>
                <br></br>
                <div >
                    {this.GetRenderPlayLists()}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userplaylists : state.playlists
        
    };
};

const mapDispatchToProps = { 
    renderPlaylists
    
}



export default connect (mapStateToProps, mapDispatchToProps) (playlist);