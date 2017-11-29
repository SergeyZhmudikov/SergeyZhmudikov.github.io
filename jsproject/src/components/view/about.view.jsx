import React, { Component } from "react";
import { connect } from 'react-redux';
import "../../fonts/css/font-awesome.css";
import { Navigation } from "../navigation/nav.jsx";
import './about.view.style.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

export class AboutView extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log(this.props)
    }

    render() {

        return ( 
            <div className = "mdb_aboutView_container" >
            <div className = "mdb-about-header" >
            <Navigation hideAddMovie = { true }/> 
            </div>
            <div className = "mdb-dashboard__about" >
            <div className = "about-title" > Welcome to my page! </div>
            <div className = "about-block">
            <div className = "about-block__descriptoon" >

            Episode IV, A NEW HOPE It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….
            </div> 
            <div className = "about-picture_block" >
            <div className = "about-picture"></div>
            </div>

            </div>

            </div> 
            </div> 
            
        )
    }

}