import React, { Component } from "react";
import './nav.css';




export default class Navigation extends Component{
render(){
    return(
    <div className="mdb-nav">
        <a href="" className="mdb-nav__add mdb-nav-link">Add movie</a>
        <span>|</span>
        <a href="" className="mdb-nav__about mdb-nav-link">About</a>
        <span>|</span>
        <a href="" className="mdb-nav__priority mdb-nav-link">Priority</a>
        <span>|</span>
        <a href="" className="mdb-nav__blog mdb-nav-link">Blog</a>           
            
         
    </div>  
            )
}
}
