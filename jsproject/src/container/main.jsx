import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

import {MovieContainer} from "../components/view/movie.view.jsx";
import {ShowContainer} from "../components/view/show.view.jsx";
import {Card} from "../components/card/card.jsx"
import {Sidebar} from "../components/sidebar/sidebar.jsx";
import {menuView,movieView} from '../store/actions/sidebar.action';


import { connect } from 'react-redux';
import { sidebar } from "../store/reducers/index";
import '../container/main.css'



export class App extends React.Component{
    constructor(props){
        super(props);   
               
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
                           
                
                
                
                
                
                <Route path="/" render={(props)=>
                <MovieContainer {...props}/>}/>
                
                <Route path="/shows" render={(props)=>
                <ShowContainer {...props}/>}/>
                
                <Route path="/movies/:id" component = {Card}/>

                <Route path="/shows/:id" component = {Card}/>

                <Route path="/library"/>

                

                {/* <Route path="/shows/:id" render={(props)=>
                <Card data={...props}/>}/>        */}

                             
                </div>
              </Router>             
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
       const clickmenu = state.sidebar.menu;
       
       return {
         clickmenu
         
    };
    };
    
    const mapDispatchToProps = (dispatch) => ({
        menuView: (menu) => dispatch(menuView(menu)),
        movieView: (movie) => dispatch(movieView(movie))
        // formView: (form) => dispatch(formView(form))
    });
    
    export const Root = connect(mapStateToProps, mapDispatchToProps)(App);