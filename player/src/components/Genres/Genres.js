import React, { Component } from 'react'
import { connect } from 'react-redux'
import {renderGenreSongs} from '../../redux/actions/elementToRender'
import genreList from '../../example/genres.json'



import './Genres.css';

export class Albums extends Component {
   renderGenres(){
       const genres = genreList;
       return(
           <div className="row">
               {
                   genres.map(genre => {
                       return <div  key={genre.id}>
                            <div className="columnGenre" 
                                    onClick={
                                        () => this.props.renderGenreSongs(genre.name)
                                    } >
                                <div className="contentGenre">
                                <img src={require(`../../example/images/${genre.image}` )} alt="genreImage" className="image"/>
                                <h4>{genre.name}</h4>
                                </div>
                            </div>
                        </div>
                   })
               }
           </div>
       )
   }


    render() {
        return (
            <div>
                <h1>Genres</h1>
                <br></br>
                {this.renderGenres()}   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    renderGenreSongs

}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
