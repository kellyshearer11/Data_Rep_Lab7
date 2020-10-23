import  React from 'react';
import { MovieItem } from './movieitem';

// Movie component 
// passing data using map function
export class Movies extends React.Component{

    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        })
         
        
    }
}