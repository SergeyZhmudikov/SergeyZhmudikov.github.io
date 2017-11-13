import React, { Component } from "react";
import './addform.css';
import "../../fonts/css/font-awesome.css";
import getGenre from "../service/service-genre.js";





export default class Addform extends Component{
    constructor (props){
        super(props);
        this.state = {
            genresArr:[],
            title: ''
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
               };

        

    componentWillMount(){
        getGenre().then(response=>{
            let arr = JSON.parse(response).genres;
            console.log(arr);
              this.setState({genresArr: arr});
            });
    }
    handleCloseAddMovieForm(e) {
        e.preventDefault();
        this.props.handleCloseAddMovieForm();
    }

    handleSubmit(event) {
  console.log('form is submitted',this.state.title);
  event.preventDefault();
}

handleTitleChange(event) {
  console.log('TitleChange', event.target.value);
  this.setState({title: event.target.value});
}
    render(){
        
        return(
        <div className="mdb-addform">
        <form onSubmit={this.handleSubmit} action="" name="movie_form">
            <div className="mdb-addform__txtinput txtinput">
                    <p className="txtinput__header" >Add movie</p>
                         <hr/>
                    <p className="txtinput__subheader">Title</p>
                        <input 
                            className="txtinput__field" 
                            type="text" 
                            name="movie_text" 
                            onChange={this.handleTitleChange}
                            value={this.state.title} 
                            required/>
                    <p className="txtinput__subheader">Overview</p>
                <textarea className="txtinput__area" name="movie_area" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="mdb-addform__genre txtinput" >
                <p className="txtinput__subheader">Genre</p>
                <div className="genre">
                {this.state.genresArr.map((item,index)=>{
                    return(
                    <div key={item.id} className="genre__checkbox">
                      <input 
                      type="checkbox" 
                      genreid={item.id} />
                      {item.name}
                     </div>
                    )
                })}
                
                </div>
                <input type="checkbox" name="" id=""/>Adult
            </div>
            <div className="mdb-addform__upload_bar txtinput">
            <div className="upload_bar"></div>
            <div className="poster_bar">
                <div className="poster_bar__poster"></div>
                <div className="poster_bar__poster"></div>
                <div className="poster_bar__poster"></div>
                <div className="poster_bar__poster"></div>
            </div>
            <div className="slide_bar">
                <div className="slide_bar__item"></div>
                <div className="slide_bar__item"></div>
                <div className="slide_bar__item"></div>
                <div className="slide_bar__item"></div>
            </div>
            <div className="scroll_bar"></div>
            <button className="mdb-addform__btn mdb-addform__btn--big">Add</button>
            <button className="mdb-addform__btn mdb-addform__btn--small">Cancel</button></div>
            </form>
        </div>
    )}
}













 // this.state = {
        //   genresArr:[{
        //     "id": 28,
        //     "name": "Action"
        //   },
        //   {
        //     "id": 12,
        //     "name": "Adventure"
        //   },
        //   {
        //     "id": 16,
        //     "name": "Animation"
        //   },
        //   {
        //     "id": 35,
        //     "name": "Comedy"
        //   },
        //   {
        //     "id": 80,
        //     "name": "Crime"
        //   },
        //   {
        //     "id": 99,
        //     "name": "Documentary"
        //   },
        //   {
        //     "id": 18,
        //     "name": "Drama"
        //   },
        //   {
        //     "id": 10751,
        //     "name": "Family"
        //   },
        //   {
        //     "id": 14,
        //     "name": "Fantasy"
        //   },
        //   {
        //     "id": 36,
        //     "name": "History"
        //   },
        //   {
        //     "id": 27,
        //     "name": "Horror"
        //   },
        //   {
        //     "id": 10402,
        //     "name": "Music"
        //   },
        //   {
        //     "id": 9648,
        //     "name": "Mystery"
        //   },
        //   {
        //     "id": 10749,
        //     "name": "Romance"
        //   },
        //   {
        //     "id": 878,
        //     "name": "Science Fiction"
        //   },
        //   {
        //     "id": 10770,
        //     "name": "TV Movie"
        //   },
        //   {
        //     "id": 53,
        //     "name": "Thriller"
        //   },
        //   {
        //     "id": 10752,
        //     "name": "War"
        //   },
        //   {
        //     "id": 37,
        //     "name": "Western"
        //   }],
        //   title: '',
         
        // };