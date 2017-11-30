import React, { Component } from "react";
import './addform.css';
import "../../fonts/css/font-awesome.css";
// import getGenre from "../service/service-genre.js";
import {
    closeForm
} from "../../store/actions";
import {connect} from "react-redux";
import {Genres } from '../genres/genres.jsx';
import {Textarea} from '../../components/subcomponents/input/text.area.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx'





export class Addform extends Component{
    constructor (props){
        super(props);
        // this.genre_val = []; 
        this.state = {
            name: '',
            overview: '',
            genre: [] ,
            poster: 0
        };
        this.onTitleChange = this.onTitleChange.bind(this);       
        this.onOverviewChange = this.onOverviewChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.validationForm = this.validationForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        // this.uploadPicture = this.uploadPicture.bind(this);
        };


            onTitleChange(value){
                let inputTitle = value;
                console.log(inputTitle);
                this.setState({name: inputTitle});
            }
          
            onOverviewChange(value){
                let inputOverview = value;
                console.log(inputOverview);
                this.setState({overview: inputOverview});
            }

            closeForm(e) {
                e && e.preventDefault();
                this.props.closeForm();
            }
            handleAdultGenreChange(event){
                const targetAdult = event.target.name;
                const valueAdult = event.target.id;
                // console.log('targetAdult',targetAdult);
                // console.log('valueAdult',valueAdult);
                this.setState((prevState) => ({
                    genre: prevState.genre.concat(valueAdult)
                    }));
                    console.log(this.state.genre)
            }

            handleGenreChange(event){
                const target = event.name;
                const value = event.value;
                // console.log('target',target);
                // console.log('valuevalue', value);              
                if (event.checked === true) {
                    this.setState((prevState) => ({
                        genre: prevState.genre.concat(value)
                        }));
                        console.log(this.state.genre)
                } else {
                    this.setState((prevState) => ({
                        genre: prevState.genre
                    }));
                    // console.log('No')
                //     this.setState({
                //         genre_val: genre_val.pop() 
                //          });
                // }
            }}
          
           
              validationForm() {
                // let validCheck = this.state.genres.length;
                let validName = !!this.state.name;
                let validOverview = !!this.state.overview;
                if (validName && validOverview === true) {
                  return false;
                }
                return true;
              }

            //   uploadPicture(event){
            //     let inputimg = event;
            //     console.log(inputimg);
            //     this.setState({poster: inputimg});
            // }

              handleSubmitForm(event){
                event.preventDefault(); 
                let item = {
                    
                    name: this.state.name,
                    overview: this.state.overview,
                    genre: this.state.genre,
                    // poster: this.state.poster,
                    id: new Date().valueOf()
                    
              }


             
            //   let genresString = JSON.stringify(item);
              
            //   localStorage.setItem('Library', genresString);
            //   let getStorage = localStorage.getItem('Library');
            //   console.log(getStorage);


            //   let aba = localStorage.setItem('Library', getStorage.concat(aba));
            //   let asd = localStorage.getItem('Library');
            //   console.log(asd);
            
            if(this.props.addItem){
                this.props.addItem(item); 
                // this.props.closeForm;
            }
                // this.props.addNewItemToArray(newItem);
                this.closeForm();
            
            }

    render(){
        
        return(
        <div className={(this.props.isOpened)?"mdb-addform":"mdb-addform-hide"}>
        
         <form className="movie_form" >
           
            <div className="mdb-addform__txtinput txtinput">
                    <p className="txtinput__header" >{this.props.header}</p>
                         {/* <hr/> */}
                    
                 <p className="txtinput__subheader">Title</p>
                 <Inputblock
                 onChange={this.onTitleChange.bind(this)}
                 placeholder = 'Title'
                    inputtype = 'text'
           
                 inputstyle = {{width: 250+'px',
                     height: 30+'px'
           
                 }}/>
                {!this.state.name && <p className='mdb-form__error'>Please, enter title</p>}
                
                <p className="txtinput__subheader">Overview</p>               
                <Textarea
                onChange={this.onOverviewChange.bind(this)}
                placeholder = 'Overview'
                rows = '6'
                txtareastyle = {{width: 250+'px'}}/>
            {!this.state.overview && <p className='mdb-form__error'>Please, enter overview</p>}

            </div>


            <div className="mdb-addform__genre txtinput" >
                <p className="txtinput__subheader">Genre</p>
                    <div className="genre" >
                        
                        <div className="genre-column_container">
                        
                        <Genres onChange={this.handleGenreChange.bind(this)}/>
                    
                        </div>
                    {/* {this.state.genres.length===0 && <p className='mdb-form__error'>Please, select genre</p>} */}
                        <div className="genre-adult">
                            <input type="checkbox" 
                            onChange={this.handleAdultGenreChange.bind(this)}
                            name="Adult" 
                            id="18+"/>
                        Adult
                        </div>
                    </div>
            </div>
            <div className="mdb-addform__upload_bar txtinput">
            <div className="upload_bar">
            <input className='mdb-form__upload' 
            name='file' 
            type="file"
            disabled
             multiple onChange={this.uploadPicture}/></div>
            {/* <div className="poster_bar">
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
            <div className="scroll_bar"></div> */}
            <button className="mdb-addform__btn mdb-addform__btn--big" disabled={this.validationForm()} onClick={this.handleSubmitForm.bind(this)} >Add</button>
            <button className="mdb-addform__btn mdb-addform__btn--small" onClick={this.closeForm}>Cancel</button></div>
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
        // event.preventDefault();
    }    
})

export const Form = connect(mapStateToProps, mapDispatchToProps)(Addform);










 //   onChange(event) {
            //     let valueName = event;
            //     console.log(valueName);
            //     // if(event.target === true) {
            //     //   this.setState((array) => ({
            //     //     genres: array.genres.concat(valueName)
            //     //   }));
            //     // } else {
            //     //   this.setState((array) => ({
            //     //     genres: array.genres.filter(function(item) {
            //     //       return item !== valueName;
            //     //   })}));
            //     // }
            //   }

            //   uploadPicture(e) {
            //     this.setState({uploadimg: e.target.value});
            //   }
              