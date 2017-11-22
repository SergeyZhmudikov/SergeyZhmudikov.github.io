import React, { Component } from "react";
import { connect } from 'react-redux';
import { Movies } from '../movie list/movie.jsx';
import {showBackend} from '../../store/actions/showdata.action';
import {showData} from "../../store/reducers/index.js";
import '../movie list/movie.css';
import { Search } from "../search/search.jsx" ;
import { Navigation } from "../navigation/nav.jsx" ;
import './show.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'





class ShowView extends Component {
    constructor(props) {
        super(props);
        this.props.showBackend();
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
            <div className = "mdb_showView_container">
            
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
                        <NavLink to={`/shows/${item.id}`} key={item.name+"card"}>
                    <Movies 
                    poster={item.poster} 
                    name={item.name}
                    data={item} 
                    key={item.id}
                    /></NavLink>)
                })}
                
                        
                        
                </div>
                </div> )
        }

    }

    const mapStateToProps = (state) =>{
        let dataarr = state.showData.show;
        
        return{
            dataarr
        };
    };
    
    const mapDispatchToProps = (dispatch) =>({
        showBackend: ()=> {dispatch(showBackend());
        }
    })
    export const ShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShowView);