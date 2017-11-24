import React, { Component } from "react";
import './addform.css';
import "../../fonts/css/font-awesome.css";
// import getGenre from "../service/service-genre.js";
import {
    closeForm

} from "../../store/actions";
import {connect} from "react-redux";
import {Genres } from '../genres/genres.jsx'





export class Addform extends Component{
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
        // this.closeForm = this.closeForm.bind(this);
        
               };
               handleTitleChange(e) {
                let val = e.target.value;
                this.setState({name: val});
              }
          
              onOverviewChange(e) {
                let val = e.target.value;
                this.setState({overview: val});
              }
          
              changeGenre(e) {
                let valueName = e.target;
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

              handleSubmitForm(event){
                event.preventDefault(); 
                let item = {
                    id: new Date().valueOf(),
                    name: this.state.name,
                    description: this.state.description,
                    genre: this.genre,
                    poster: this.state.poster
              }
            }

    render(){
        
        return(
        <div className={(this.props.isOpened)?"mdb-addform":"mdb-addform-hide"}>
        
         <form  action="" name="movie_form" onSubmit={this.handleSubmitForm.bind(this)}>
           
            <div className="mdb-addform__txtinput txtinput">
                    <p className="txtinput__header" >Add movie</p>
                         <hr/>
                    
                    <p className="txtinput__subheader">Title</p>
                        <input 
                            className="txtinput__field" 
                            type="text" 
                            name="movie_text" 
                            onChange={this.handleTitleChange}
                            value={this.state.name} 
                            required/>
                            {!this.state.name && <p className='mdb-form__error'>Please, enter title</p>}
                
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
                <div className="genre" >
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
                
                <Genres onChange={this.changeGenre}/>
               
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
            <button className="mdb-addform__btn mdb-addform__btn--small" onClick={this.props.closeForm}>Cancel</button></div>
            </form>
        </div>
    )}
}

const mapStateToProps = (state) =>{
    let isOpened = state.form.isFormOpen;
    return{
        isOpened
    };
};

const mapDispatchToProps = (dispatch) =>({
    closeForm: (event)=> {
        dispatch(closeForm())
        event.preventDefault();
    }    
})

export const Form = connect(mapStateToProps, mapDispatchToProps)(Addform);










