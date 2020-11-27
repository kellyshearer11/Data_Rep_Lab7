import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// Read component 
export class Read extends React.Component {

    // state object called movies
    // Install axios to call get requestb for Json blob/ API
    // pulling the data by using response method
    // arrow function

    // constructor reload data
    constructor(){
        super();
        
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        movies: []

    };
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then(response => {
        this.setState({ movies: response.data });
        })
        .catch(function (error) {
        console.log(error);
        })
        }
        // reload data method
        ReloadData() {
            axios.get('http://localhost:4000/api/movies')
            .then(response => {
            this.setState({ movies: response.data });
            })
            .catch(function (error) {
            console.log(error);
            })
        }

    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}