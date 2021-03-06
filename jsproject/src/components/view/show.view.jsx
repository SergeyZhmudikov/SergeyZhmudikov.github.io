import React, { Component } from "react";
import { connect } from 'react-redux';
import { Movies } from '../movie list/movie.jsx';
import {showBackend,addShow,addShowToLibrary,deleteShowFromLibrary} from '../../store/actions';
import {showData} from "../../store/reducers/index.js";
import '../movie list/movie.css';
// import { Search } from "../search/search.jsx" ;
import { Navigation } from "../navigation/nav.jsx" ;
import './show.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import {Form} from '../add_form/addform.jsx';
import {SearchButton} from '../../components/subcomponents/buttons/search.btn.jsx';
import {SuperSearch} from '../advanced.search/advanced.search.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx';






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
    addShowToLibrary(item){
        this.props.addShowToLibrary(item);
    }        
    deleteShowFromLibrary(item){
        this.props.deleteShowFromLibrary(item);
    } 


    render() {

        return ( 
            <div className = "mdb_showView_container">
            
            <div className = 'mdb-header'> 
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
            tag='show'/> 
            <SuperSearch/>
            <Form
             header='Add show'
            addItem={this.props.addShow}/> 
            </div>
            <div>  </div>
             <div className = "mdb-dashboard__shows"> 
             {this.props.dataarr
            .filter((el)=>{
            return el.name.indexOf(this.state.newevent)!==-1;
             
                })
                    
             .map((item,index)=>
                {
                    return(
                        
                    <Movies 
                    hideSaveIcon={true}
                    addToLibrary={this.addShowToLibrary.bind(this)}
                    deleteFromLibrary={this.deleteShowFromLibrary.bind(this)}
                    poster={item.poster} 
                    overview={item.overview}
                    data={item} 
                    key={item.id}>
                    <NavLink to={`/shows/${item.id}`} key={item.name + "card"}>
                    <div className="mdb-movies_title" title={item.name}></div>
                     </NavLink>
                    </Movies>)
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
        showBackend: ()=> dispatch(showBackend()),
        addShow: (item) => dispatch(addShow(item)),
        addShowToLibrary: (item) => dispatch(addShowToLibrary(item)),
        deleteShowFromLibrary: (item) => dispatch(deleteShowFromLibrary(item))
    
    })
    export const ShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShowView);