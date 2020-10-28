import  React from 'react';

// Create component 
export class Create extends React.Component{

    constructor(){
        super();
        // binding events
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster:''
        }
    }
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    // onsubmit method
    onSubmit(e){
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
    }
    render(){
        return(
            // div form to input movie title, year, poster
            <div className='App'>
               <form onSubmit={this.onSubmit}>
                   <div className='form-group'>
                       <label> Add movie Title </label>
                       <input type='text' 
                       className='form-control'
                       value={this.state.Title}
                       onChange={this.onChangeTitle}></input>
                   </div>
                   <div className='form-group'>
                       <label> Add movie Year </label>
                       <input type='text' 
                       className='form-control'
                       value={this.state.Year}
                       onChange={this.onChangeYear}></input>
                   </div>
                   <div className='form-group'>
                       <label>Add movie poster </label>
                       <textarea type='text'
                       className='form-control'
                       value={this.state.Poster}
                       onChange={this.onChangePoster}>
                       </textarea>

                   </div>
                   <div className="form-group">
                       <input type='submit'
                       value='Add Movie'
                       className='btn btn-primary'></input>
                   </div>
               </form>
            </div>
        );
    }
}