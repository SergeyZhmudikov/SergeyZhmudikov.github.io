import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

import {MovieContainer} from "../components/view/movie.view.jsx";
import {ShowContainer} from "../components/view/show.view.jsx";
import {Card} from "../components/card/card.jsx"
import {Sidebar} from "../components/sidebar/sidebar.jsx";
import {menuView,movieView} from '../store/actions/sidebar.action';


import { connect } from 'react-redux';
import { sidebar } from "../store/reducers/index";
import '../container/main.css'
import {showBackend} from '../store/actions/showdata.action';
import {showData} from "../store/reducers/index.js";
import {movieBackend} from '../store/actions/moviedata.action';
import {movieData} from "../store/reducers/index.js";
import {LibraryView} from "../components/view/library.view.jsx";



export class App extends React.Component{
    constructor(props){
        super(props);   
        this.props.showBackend();  
        this.props.movieBackend();
    };

    componentWillMount(){
        
    }

    

    render(){
        return(
            <div className="mdb-app_container">
            <Router>
            <div className="mdb-app">
                <Sidebar
                 openSidebar={this.props.clickmenu}
                 menuView = {this.props.menuView}
                 movieView = {this.props.movieView}
                            /> 
                <Switch>

                <Route exact path="/" render={() =>
                                <Redirect to="/movies"/>
                            }/>
                

                <Route exact path="/movies" render={(props)=>
                <MovieContainer {...props}/>}/>
                
                <Route path="/movies/:id" render={(props)=>
                <Card movieArray=
                {this.props.moviearr} {...props}/>}/>
                
                <Route exact path="/shows" render={(props)=>
                <ShowContainer {...props}/>}/>          
                
                <Route path="/shows/:id" render={(props)=>
                <Card movieArray=
                {this.props.showarr} {...props}/>}/>


                <Route path="/library" component={LibraryView}/>
                </Switch>
                </div>
              </Router>             
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
       const clickmenu = state.sidebar.menu;
       let showarr = state.showData.show;
       let moviearr = state.movieData.movies;
       return {
         clickmenu,
         showarr,
         moviearr
    };
    };
    
    const mapDispatchToProps = (dispatch) => ({
        menuView: (menu) => dispatch(menuView(menu)),
        movieView: (movie) => dispatch(movieView(movie)),
        showBackend: ()=> dispatch(showBackend()),
        movieBackend: ()=> dispatch(movieBackend())
        // formView: (form) => dispatch(formView(form))
    });
    
    export const Root = connect(mapStateToProps, mapDispatchToProps)(App);