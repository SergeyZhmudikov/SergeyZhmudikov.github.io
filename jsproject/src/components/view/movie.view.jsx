import React, { Component } from "react";
import { connect } from 'react-redux';
import { Movies } from '../movie list/movie.jsx';
import {movieBackend} from '../../store/actions/moviedata.action';
import {movieData} from "../../store/reducers/index.js";
import '../movie list/movie.css';
import { Search } from "../search/search.jsx" ;
import { Navigation } from "../navigation/nav.jsx" ;





class MovieView extends Component {
    constructor(props) {
        super(props);
        this.props.movieBackend();
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
            <div className = "container-flex">
            
            <div> 
            <Search onChange={this.onChange.bind(this)}/>
            <Navigation/> 
            </div>
            <div>  </div>
             <div className = "mdb-dashboard__films"> 
             {this.props.dataarr
            .filter((el)=>{
            return el.name.indexOf(this.state.newevent)!==-1;
             
                })
                    
             .map((item,index)=>
                {
                    return(
                    <Movies 
                    poster={item.poster} 
                    name={item.name}
                    overview={item.overview} 
                    key={item.id}
                    />)
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
        movieBackend: ()=> {dispatch(movieBackend());
        }
    })
    export const Root = connect(mapStateToProps, mapDispatchToProps)(MovieView);