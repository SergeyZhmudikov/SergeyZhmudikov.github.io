import React, { Component } from "react";
import './sidebar.css';
import "../../fonts/css/font-awesome.css";




export default class SideBar extends Component{
render(){
    return(
                <div className="mdb-container_side mdb-sidebar" >
                          <div className="mdb-sidebar__menu mdb-size">
                          <a href=""><i className="fa  fa-bars" aria-hidden="true" ></i></a>          
                          <i className="fa fa-3x fa-plus-square-o" aria-hidden="true"></i>
                              <div className="mdb-logo mdb-text mdb-text--big">Logo</div>
                         </div>
                         <div className="mdb-sidebar__movies mdb-size">
                        <a href=""><i className="fa  fa-film" aria-hidden="true"></i></a> 
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
                           </div>
            )
}
}






