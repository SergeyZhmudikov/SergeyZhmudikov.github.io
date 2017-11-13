import React, { Component } from "react";
import './addform.css';
import "../../fonts/css/font-awesome.css";
// import getGenre from "../service/service-genre.js";





export default class Addform extends Component{
    constructor (props){
        super(props);
        this.state = {
            // genresArr:[],
            overview: '',
            genres:[],
            title: ''
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        
        this.onOverviewChange = this.onOverviewChange.bind(this);
        this.changeGenre = this.changeGenre.bind(this);
        this.uploadPicture = this.uploadPicture.bind(this);
        this.validationForm = this.validationForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        
               };
               handleTitleChange(e) {
                let val = e.target.value;
                this.setState({title: val});
              }
          
              onOverviewChange(e) {
                let val = e.target.value;
                this.setState({overview: val});
              }
          
              changeGenre(e) {
                let valueName = e.target.value;
                if(e.target.checked === true) {
                  this.setState((array) => ({
                    genres: array.genres.concat(valueName)
                  }));
                } else {
                  this.setState((array) => ({
                    genres: array.genres.filter(function(item) {
                      return item !== valueName;
                  })}));
                }
              }
              uploadPicture(e) {
                this.setState({uploadimg: e.target.value});
              }
              
              validationForm() {
                let validCheck = this.state.genres.length;
                let validTitle = !!this.state.title;
                if (validCheck > 0 && validTitle === true) {
                  return false;
                }
                return true;
              }
              
              closeForm(e) {
                e.preventDefault();
                this.props.isOpened();
              }

        

    // componentWillMount(){
    //     getGenre().then(response=>{
    //         let arr = JSON.parse(response).genres;
    //         console.log(arr);
    //           this.setState({genresArr: arr});
    //         });
    // }
//     handleCloseAddMovieForm(e) {
//         e.preventDefault();
//         this.props.handleCloseAddMovieForm();
//     }

//     handleSubmit(event) {
//   console.log('form is submitted',this.state.title);
//   event.preventDefault();
// }

// handleTitleChange(event) {
//   console.log('TitleChange', event.target.value);
//   this.setState({title: event.target.value});
// }
    render(){
        
        return(
        <div className="mdb-addform">
         <form  action="" name="movie_form">
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
                            {!this.state.title && <p className='mdb-form__error'>Please, enter title</p>}
                    <p className="txtinput__subheader">Overview</p>
                <textarea className="txtinput__area" 
                name="movie_area"
                cols="30" 
                rows="10"
                onChange={this.onOverviewChange}>
                </textarea>
            </div>
            <div className="mdb-addform__genre txtinput" >
                <p className="txtinput__subheader">Genre</p>
                <div className="genre" onClick={this.changeGenre}>
                {/* {this.state.genresArr.map((item,index)=>{
                    return(
                    <div key={item.id} className="genre__checkbox">
                      <input 
                      type="checkbox" 
                      genreid={item.id} />
                      {item.name}
                     </div>
                    )
                })} */}
                <div className="genre-column_container">
                <div className="genre-column">
                    <div>
                        <input type="checkbox" name="genre" id="Action"/>
                        <label>Action</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="Adventure"/>
                        <label>Adventure</label>
                    </div>
                        <div>
                        <input type="checkbox" name="genre" id="Thriller"/>
                        <label>Thriller</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="Comedy"/>
                        <label>Comedy</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="Fantasy"/>
                        <label>Fantasy</label>
                    </div>
                
                </div>
                <div className="genre-column">
                    <div>
                        <input type="checkbox" name="genre" id="Drama"/>
                        <label>Drama</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="Horror"/>
                        <label>Horror</label>
                    </div>
                        <div>
                        <input type="checkbox" name="genre" id="Crime"/>
                        <label>Crime</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="War"/>
                        <label>War</label>
                    </div>
                    <div>
                        <input type="checkbox" name="genre" id="Documentary"/>
                        <label>Documentary</label>
                    </div>
                
                </div>
               
                </div>
                {this.state.genres.length===0 && <p className='mdb-form__error'>Please, select genre</p>}
                <div className="genre-adult">
                <input type="checkbox" name="" id=""/>Adult
            </div>
            </div>
            </div>
            <div className="mdb-addform__upload_bar txtinput">
            <div className="upload_bar">
            <input className='mdb-form__upload' id='file' type="file" multiple onChange={this.uploadPicture}/></div>
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
            <button className="mdb-addform__btn mdb-addform__btn--big" disabled={this.validationForm()}>Add</button>
            <button className="mdb-addform__btn mdb-addform__btn--small" onClick={this.closeForm}>Cancel</button></div>
            </form>
        </div>
    )}
}










