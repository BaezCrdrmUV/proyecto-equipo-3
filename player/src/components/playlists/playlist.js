import React, { Component,useState } from 'react'
import "./playlist.css"
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap'
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
                <RenderNewPlaylistModal ></RenderNewPlaylistModal>
                <br></br>
                <div >
                    {this.GetRenderPlayLists()}
                </div>
            </div>

        )
    }
}


function RenderNewPlaylistModal  ()  {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" className="fa fa-plus" onClick={handleShow}>
           New playlist
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
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