import React, { Component } from "react";
import { connect } from 'react-redux';
import './page-not-found.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

export class Notfound extends Component {
    constructor(props) {
        super(props);
               
}

    render() {
        

        return ( 
            <div className = "mdb_not-found_container">
            <div className='mdb_error_message'>
            <div className='mdb_error_message__header'> 404 Error!</div>
            <div className='mdb_error_message__reason'>
            Page not found
            </div>
            <div className='mdb_error_message__description'>
            The requested url was not found...
            </div>
            </div>
            </div> )
            
        }
    }
 