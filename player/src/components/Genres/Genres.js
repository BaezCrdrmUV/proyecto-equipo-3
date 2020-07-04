import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../redux/actions/elementToRender'


import './Genres.css';

export class Albums extends Component {


 

   getGenres(){

   }

   getGenreSongs(id){

   }


   renderGenres(){
       const genres = this.getGenres;
       return(
           <div className="row">
               {
                   genres.map(genre => {
                       return <div  key={genre.id}>
                            <div className="columnGenre" 
                                    onClick={
                                        () => this.getGenreSongs(genre.id)
                                    } >
                                <div className="contentGenre">
                                <img src={genre.urlImage} alt="genreImage" className="image"/>
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


}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
