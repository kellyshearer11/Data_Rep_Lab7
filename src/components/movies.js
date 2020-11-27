import  React from 'react';
import { MovieItem } from './movieitem';

// Movie component 
// passing data using map function
// reloads data without refreshing 
export class Movies extends React.Component{

    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
         
        
    }
}