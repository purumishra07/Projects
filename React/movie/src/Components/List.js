import React, { Component } from 'react'
import { movies } from './getMovies';
// import axios from 'axios'

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hover:" "
        }
    }

    handleEnter = (id) => {
        this.setState({
            hover: id
        })
    };

    handleLeave = (id) => {
        this.setState({
            hover: ''
        })
    };

  render() {
        let allMovies = movies.results;
    return (
      <div>
        <h3 className="trending display-3">Trending</h3>
        <div className='movies-list'>
            {allMovies.map((movieObj)=> {
                return(
                <div className="card movie-card" onMouseEnter={()=>this.handleEnter(movieObj.id)} onMouseLeave={()=>this.handleLeave}>
                <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                    <h5 class="card-title movie-title">{movieObj.original_title}</h5>
                    {/* <p class="card-text movie-text">{movie.overview}</p> */}
                    <div className='button-wrapper'>
                        {this.state.hover == movieObj.id && 
                            <a href="#" class="btn btn-info movie-button">Add to Favourites</a>
                        }
                    </div>
            </div>
                )
            })}
        
        </div>
        <div className="pagination">
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
 </nav>
 </div>
      </div>
    )
  }
}
