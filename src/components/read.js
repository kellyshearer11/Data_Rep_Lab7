import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// Read component 
export class Read extends React.Component {

    // state object called movies
    // Install axios to call get requestb for Json blob/ API
    // pulling the data by using response method
    // arrow function

    state = {
        movies: []

    };
    // component lifecycle hook
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })
                }
            ) // if error above it will be logged to console
            .catch(
                (error) => { console.log(error) }
            );
    }

    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}