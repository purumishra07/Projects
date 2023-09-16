import React, { Component } from 'react'
// import { movies } from './getMovies';
import axios from 'axios';
import API_KEY from '../secrets';

export default class List extends Component {
    constructor() {
        super();
        // console.log("constructor is called");  
        this.state = {
            hover: "",
            parr: [1],  // what page result am i showing
            currPage:1,
            movies:[],
        }
    }

    handleEnter = (id) => {
        this.setState({
            hover: id,
        })
    };

    handleLeave = (id) => {
        this.setState({
            hover: '',
        })
    };

  async componentDidMount(){
    // console.log("componentDidMount is called"); 
    let ans = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`);
    // console.log(ans.data);
    this.setState({
        movies:[...ans.data.results]
    })
  }
  
    render() {
        // console.log("render is called");  
        // let allMovies = movies.results;  
    return (
        <>
            {
                this.state.movies.length == 0 ? (
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                ) : (
                 <div>
                     <h3 className="trending display-3">Trending</h3>
                    <div className='movies-list'>
                            {this.state.movies.map((movieObj) => {
                        return (
                            <div className="card movie-card" onMouseEnter={() => this.handleEnter(movieObj.id)} onMouseLeave={() => this.handleLeave}>
                                <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                                <h5 class="card-title movie-title">{movieObj.original_title}</h5>
                                {/* <p class="card-text movie-text">{movie.overview}</p> */}
                                <div className='button-wrapper'>
                                    {this.state.hover == movieObj.id &&
                                        <a href="#" class="btn btn-info movie-button">Add to Favourites</a>}
                                </div>
                            </div>
                        )
                    })}
                    </div>

                <div className="pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {
                                this.state.parr.map(pageNum => (
                                <li class="page-item"><a class="page-link" href="#">{pageNum}</a></li>
                            ))
                            }
                            {/* <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                </div>
            )}     
            </>
        )
    }
}


 