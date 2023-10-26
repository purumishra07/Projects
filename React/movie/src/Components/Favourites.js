import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";

export default class Favourites extends Component {
    constructor() {
        super();
        this.state = {
            movies:[]
        }
    }

    async componentDidMount() {
        let ans = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        this.setState({
        movies:[...ans.data.results]
    })
    }
    render() {
        return (
            <div class="row">
                <div class="col-3">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">All Genres</li>
                        <li class="list-group-item">Fantasy</li>
                        <li class="list-group-item">Action</li>
                        <li class="list-group-item">Horror</li>
                    </ul>
                </div>
                <div class="col">
                    <div class="row">
                        <input type="text" className="col" placeholder="Search"></input>
                        <input type="number" className="col" placeholder="5"></input> 
                    </div>
                    <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Popularity</th>
                                <th scope="col">Rating</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.movies.map((movieObj)=>(
                            <tr>
                                <td scope="row">{movieObj.original_title}</td>
                                <td>{movieObj.original_title}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            ))
                        }
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}




