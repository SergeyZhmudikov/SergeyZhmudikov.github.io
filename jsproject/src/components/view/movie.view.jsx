import React, { Component } from "react";
import { connect } from 'react-redux';
import { Movies } from '../movie list/movie.jsx';
import {movieBackend} from '../../store/actions/moviedata.action';
import {movieData} from "../../store/reducers/index.js";

import '../movie list/movie.css';
import { Search } from "../search/search.jsx" ;
import { Navigation } from "../navigation/nav.jsx" ;
import './movie.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import {Form} from '../add_form/addform.jsx'





class MovieView extends Component {
    constructor(props) {
        super(props);
        this.props.movieBackend();
        // this.props.addMovie();
        this.state ={
            // Filmarray:[],
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
          


    render() {

        return ( 
            <div className = "mdb_movieView_container">
            
            <div className = "mdb-header"> 
            <Search onChange={this.onChange.bind(this)}/>
            <Navigation /> 
            <Form />  
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
                    poster={item.poster} 
                    name={item.name}
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
        // addMovie: ()=> dispatch(addMovie()),
        
    })
    export const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieView);