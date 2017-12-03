import React, { Component } from "react";
import './sidebar.css';
import "../../fonts/css/font-awesome.css";
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
  import { connect } from 'react-redux';
  import {library} from "../../store/reducers/index.js";



// const Sidebarblock = (props) => {
    

class Sidebarblock extends Component {
    constructor(props) {
        super(props);
       
        }


   

render(){     
    return(
      <div className="mdb-container_side mdb-sidebar" >
        <div className="mdb-sidebar__icons">
                <div className="mdb-sidebar-icon">
                    <i className="fa  fa-bars" aria-hidden="true"

                    onClick={this.props.menuView}>
                    </i>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/movies" activeClassName="active-link">
                    <i className="fa  fa-film" aria-hidden="true"
                    title='Movies' 
                     onClick={this.props.movieView}>
                    </i>
                    </NavLink>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/shows" activeClassName="active-link">
                    <i className="fa  fa-television" aria-hidden="true"
                    title='TV-shows'  
                    onClick={this.props.showView}>
                    </i>
                    </NavLink>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/library" activeClassName="active-link">
                    <i className="fa  fa-bar-chart" aria-hidden="true"
                    title='Library' 
                onClick={this.props.libraryView}
                > 
                {(this.props.addLib.length > 0) ?`(${this.props.addLib.length})`:''}
                    </i>
                    </NavLink>
                </div>
                <div className="mdb-sidebar-icon">
                <NavLink to="/support" activeClassName="active-link">
                    <i className="fa  fa-question-circle-o" aria-hidden="true"
                    title='Support'  
                     onClick={this.props.supportView}>
                    </i>
                    </NavLink>
                </div>
        </div>

        <div className={(this.props.openSidebar)?"mdb-show":"mdb-hide"}>
            
                {/* <div className="mdb-logo"> </div> */}
                <div className="mdb-logo mdb-text mdb-text--big"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Logo</div>
                <NavLink to="/movies" activeClassName="active-link">
                <div className="mdb-text" onClick={this.props.movieView} >Movies </div>
                </NavLink>
                <NavLink to="/shows" activeClassName="active-link">
                <div className="mdb-text" onClick={this.props.showView} >TV Shows </div>
                </NavLink>
                <NavLink to="/library" activeClassName="active-link">
                <div className="mdb-text" onClick={this.props.libraryView}>My Library</div>
                </NavLink>
                <NavLink to="/support" activeClassName="active-link"> 
                <div className="mdb-text" onClick={this.props.supportView} >Support</div>
                </NavLink>
        </div>
</div> 
            )

}
}
const mapStateToProps = (state) => {
    var addLib = state.library.library;
    return {
        addLib
    };
}

export const Sidebar = connect(mapStateToProps)(Sidebarblock);








































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
