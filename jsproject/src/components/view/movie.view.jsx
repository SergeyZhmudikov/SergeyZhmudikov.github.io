import React, { Component } from "react";
import { connect } from 'react-redux';
import { Movies } from '../movie list/movie.jsx';
import {movieBackend,addMovie,addMovieToLibrary,deleteMovieFromLibrary} from '../../store/actions';
import {movieData} from "../../store/reducers/index.js";
import "../../fonts/css/font-awesome.css";
import '../movie list/movie.css';

import { Navigation } from "../navigation/nav.jsx" ;
import './movie.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import {Form} from '../add_form/addform.jsx';
// import {Button} from '../../components/subcomponents/buttons/button.jsx';
import {SearchButton} from '../../components/subcomponents/buttons/search.btn.jsx';
import {SuperSearch} from '../advanced.search/advanced.search.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx';






class MovieView extends Component {
    constructor(props) {
        super(props);
        this.props.movieBackend();
        
        this.state ={
            
            newevent: ''
        }
}


    componentWillMount() {
        console.log(this.props)
        
        
        
        
    }

    onChange(event){
        let searchQuery = event.toLowerCase();
        console.log(searchQuery)
        
        this.setState({
            newevent: searchQuery
        });
        
        
    }
    addMovieToLibrary(item){
        this.props.addMovieToLibrary(item);
    }    
    deleteMovieFromLibrary(item){
        this.props.deleteMovieFromLibrary(item);
    } 

    render() {

        return ( 
            <div className = "mdb_movieView_container">
            
            <div className = "mdb-header"> 
            <Inputblock 
            placeholder = 'Search...'
            inputtype = 'search'
            onChange={this.onChange.bind(this)}
            inputstyle = {{width: 250+'px',
            height: 30+'px',
            
            }}/>
            
            <SearchButton 
                       
            />
            <Navigation 
            tag='movie'/>
            <SuperSearch/>
            <Form 
            header='Add movie'
            addItem={this.props.addMovie}/>  
            </div>
            <div>
            
            </div>
             <div className = "mdb-dashboard__films"> 
             {this.props.dataarr
            .filter((el)=>{
            return el.name.indexOf(this.state.newevent)!==-1;
             
                })
                    
             .map((item,index)=>
                {
                    return(
                        <NavLink to={`/movies/${item.id}`} key={item.name + "card"}>
                    <Movies
                    hideSaveIcon={true}
                    deleteFromLibrary={this.deleteMovieFromLibrary.bind(this)}
                    addToLibrary={this.addMovieToLibrary.bind(this)}
                    poster={item.poster} 
                    name={item.name}
                    data = {item}
                    overview={item.overview}
                    key={item.id}
                    
                    /></NavLink>)
                })}
                
                
                                
                        
                </div>
                </div> )
        }

    }

    const mapStateToProps = (state) =>{
        let dataarr = state.movieData.movies;
        
        return{
            dataarr
        };
    };
    
    const mapDispatchToProps = (dispatch) =>({
        movieBackend: ()=> dispatch(movieBackend()),
        addMovie: (item) => dispatch(addMovie(item)),
        addMovieToLibrary: (item) => dispatch(addMovieToLibrary(item)),
        deleteMovieFromLibrary: (item) => dispatch(deleteMovieFromLibrary(item))
        
    })
    export const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieView);