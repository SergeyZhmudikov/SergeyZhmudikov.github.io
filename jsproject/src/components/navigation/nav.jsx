import React, { Component } from "react";
import './nav.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
  } from 'react-router-dom';

import {connect} from "react-redux";
import { toggleForm,toggleAbout } from "../../store/actions"; 


export class Nav extends Component{
    constructor(props){
        super(props);
        }

    

    

render(){
       
    return(
    <div className="mdb-nav">
    <div>
        <div className={this.props.hideAddMovie?"mdb-nav__add--hide mdb-nav-link":"mdb-nav__add mdb-nav-link"} onClick={this.props.toggleForm}>Add {this.props.tag}</div>
        <span className={this.props.hideAddMovie?"mdb-span-hide":"mdb-span-visible"} >|</span>
        <NavLink to="/about">
        <div className="mdb-nav__about mdb-nav-link" onClick={this.props.toggleAbout}>About</div>
        </NavLink>
        </div>       
                     
    </div> 
    )
            
}
}
const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => dispatch(toggleForm()),
    toggleAbout: () => dispatch(toggleAbout())
});

const mapStateToProps = (state) =>{
    let isOpened= state.form.isFormOpened;
    let isAbout = state.about.isAboutOpen;

    return{
        isOpened,
        isAbout
    };
};

export const Navigation = connect(mapStateToProps,mapDispatchToProps)(Nav);


