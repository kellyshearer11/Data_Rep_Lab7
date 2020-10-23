import React from 'react';
import Card from 'react-bootstrap/Card';

// Movie Item component 
export class MovieItem extends React.Component {

    // passing through the data from the read.js file to display to app
    // Bootstrap card component used to tidy up content
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>



            </div>
        );
    }
}