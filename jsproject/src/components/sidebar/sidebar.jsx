import React, { Component } from "react";
import './sidebar.css';
import "../../fonts/css/font-awesome.css";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';




export const Sidebar = (props) => {
    
    
   

            
    return(
      <div className="mdb-container_side mdb-sidebar" >
        <div className="mdb-sidebar__icons">
                <div className="mdb-sidebar-icon">
                    <i className="fa  fa-bars" aria-hidden="true" 
                    onClick={props.menuView}>
                    </i>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/movies" activeClassName="active-link">
                    <i className="fa  fa-film" aria-hidden="true" 
                     onClick={props.movieView}>
                    </i>
                    </NavLink>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/shows" activeClassName="active-link">
                    <i className="fa  fa-television" aria-hidden="true" 
                    onClick={props.showView}>
                    </i>
                    </NavLink>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/library">
                    <i className="fa  fa-bar-chart" aria-hidden="true" 
                onClick={props.libraryView}>
                    </i>
                    </NavLink>
                </div>
                <div className="mdb-sidebar-icon">
                    <i className="fa  fa-question-circle-o" aria-hidden="true" 
                     onClick={props.supportView}>
                    </i>
                </div>
        </div>

        <div className={(props.openSidebar)?"mdb-show":"mdb-hide"}>
            
                {/* <div className="mdb-logo"> </div> */}
                <div className="mdb-logo mdb-text mdb-text--big"><i className="fa fa-plus-square-o" aria-hidden="true"></i>Logo</div>
                <NavLink to="/movies">
                <div className="mdb-text" onClick={props.movieView} >Movies </div>
                </NavLink>
                <NavLink to="/shows">
                <div className="mdb-text" onClick={props.showView} >TV Shows </div>
                </NavLink>
                <NavLink to="/library">
                <div className="mdb-text" onClick={props.libraryView}>My Library</div>
                </NavLink>
                <div className="mdb-text" onClick={props.supportView} >Support</div>
        </div>
</div> 
            )

}










































{/* <div className="mdb-container_side mdb-sidebar" >
                          <div className="mdb-sidebar__menu mdb-size">
                          <a href=""><i className="fa  fa-bars" aria-hidden="true" onClick={this.toggleState.bind(this)} ></i></a>          
                          <i className="fa fa-3x fa-plus-square-o" aria-hidden="true"></i>
                              <div className="mdb-logo mdb-text mdb-text--big">Logo</div>
                         </div>
                         <div className="mdb-sidebar__movies mdb-size">
                        <a href="">
                        <i className="fa  fa-film" aria-hidden="true"></i>
                        </a> 
                              <div className="mdb-text"> Movies</div>
                           </div>
                          <div className="mdb-sidebar__show mdb-size">
                         <a href=""><i className="fa  fa-television" aria-hidden="true"></i></a> 
                               <div className="mdb-text">TV Shows</div>
                          </div>
                           <div className="mdb-sidebar__lib mdb-size">
                          <a href=""><i className="fa  fa-bar-chart" aria-hidden="true"></i></a> 
                                <div className="mdb-text">My Library</div>
                         </div>
                          <div className="mdb-sidebar__support mdb-size">
                          <a href=""><i className="fa  fa-question-circle-o" aria-hidden="true"></i></a>
                               <div className="mdb-text">Support</div>
                          </div>
                  </div> */}
