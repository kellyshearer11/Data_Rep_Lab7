import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Movie Item component 
export class MovieItem extends React.Component {

    constructor(){
        super()

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    // delete movie method
    DeleteMovie(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
        }
        

    // passing through the data from the read.js file to display to app
    // Bootstrap card component used to tidy up content
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                
                <Button variant="danger" onClick={this.DeleteMovie}> Delete </Button>
                </Card>



            </div>
        );
    }
}