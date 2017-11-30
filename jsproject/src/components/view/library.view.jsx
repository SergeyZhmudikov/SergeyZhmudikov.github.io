import React, { Component } from "react";
import { connect } from 'react-redux';
import { Movies } from '../movie list/movie.jsx';
import { Navigation } from "../navigation/nav.jsx" ;
import './library.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import {SearchButton} from '../../components/subcomponents/buttons/search.btn.jsx';
import {SuperSearch} from '../advanced.search/advanced.search.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx';
import {EmptyLibraryView} from './empty.library.view.jsx';
import {library} from "../../store/reducers/index.js";
import {initLibrary, deleteItemFromLibrary} from '../../store/actions';


class LibraryView extends Component {
    constructor(props) {
        super(props);
        this.props.initLibrary();
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

    deleteItemFromLibrary(item){
        this.props.deleteItemFromLibrary(item);
    } 

    render() {
        let libraryArray = localStorage.getItem("library");
        if(libraryArray==="[]"){
            return(
                <EmptyLibraryView/>
            );
        }
        

        return ( 
            <div className = "mdb_libraryView_container">
            
            <div className = "mdb-header"> 
            <Inputblock 
            placeholder = 'Search...'
            inputtype = 'search'
            onChange={this.onChange.bind(this)}
            inputstyle = 
            {{width: 250+'px',
            height: 30+'px'}}
            />
            
            <SearchButton/>
            <Navigation hideAddMovie = { true }/>
            <SuperSearch/>
            
            </div>
            <div className = "mdb-dashboard__library"> 
            
            {this.props.datalib
            .filter((el)=>{
            return el.name.indexOf(this.state.newevent)!==-1;
             
                })
                    
             .map((item,index)=>
                {
                    return(
                       
                    <Movies           
                    hideSaveIcon={false}
                    poster={item.poster} 
                    overview={item.overview}
                    data={item} 
                    deleteFromLibrary={this.deleteItemFromLibrary.bind(this)}
                    key={item.id}>
                    <NavLink to={`/library/${item.id}`} key={item.name + "card"}>
                    <div className="mdb-movies_title" title={item.name}></div>
                     </NavLink>
                    </Movies>)
                })}
                </div>
            
             
            </div> )
            
        }
    }
 
    const mapStateToProps = (state) =>{
        let datalib = state.library.library;
        
        return{
            datalib
        };
    };
    
    const mapDispatchToProps = (dispatch) =>({
        initLibrary: ()=> dispatch(initLibrary()),
        deleteItemFromLibrary: (item) => dispatch(deleteItemFromLibrary(item)),
        
    })
    export const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(LibraryView);   