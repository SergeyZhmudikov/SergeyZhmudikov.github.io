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
import { toggleForm } from "../../store/actions"; 


export class Nav extends Component{
    constructor(props){
        super(props);
        }

    

    

render(){
       
    return(
    <div className="mdb-nav">
    <div>
        <div className={this.props.hideAddMovie?"mdb-nav__add--hide mdb-nav-link":"mdb-nav__add mdb-nav-link"} onClick={this.props.toggleForm}>Add movie</div>
        <span className={this.props.hideAddMovie?"mdb-span-hide":"mdb-span-visible"} >|</span>
        <NavLink to="/about">
        <div className="mdb-nav__about mdb-nav-link">About</div>
        </NavLink>
        </div>       
                     
    </div> 
    )
            
}
}
const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => dispatch(toggleForm())
});

const mapStateToProps = (state) =>{
    var isOpened= state.form.isFormOpened;
    return{
        isOpened
    };
};

export const Navigation = connect(mapStateToProps,mapDispatchToProps)(Nav);


