import React, { Component } from "react";
import './sidebar.css';
import "../../fonts/css/font-awesome.css";




export default class SideBar extends Component{
      constructor(props){
            super(props);
            this.state = {isOpened:false};
        }
    
        toggleState(){
            this.setState({isOpened:!this.state.isOpened});
        }
        toggleState2(){
            if(this.props.isBackOpened){
                this.props.isBackOpened();
            }
        }
    

render(){
      let dropdownForm;
      if (this.state.isOpened){
            dropdownForm = <div className="mdb-hide">
          <div className="mdb-logo-container">
          <div className="mdb-logo"> <i className="fa fa-2x fa-plus-square-o" aria-hidden="true"></i></div>
          <div className="mdb-logo mdb-text mdb-text--big">Logo</div>
          </div>
          <div className="mdb-text" onClick={this.toggleState2.bind(this)}>Movies</div>
          <div className="mdb-text" onClick={this.toggleState2.bind(this)}>TV Shows</div>
          <div className="mdb-text">My Library</div>
          <div className="mdb-text">Support</div>
            </div>;
      }
      
    return(
      <div className="mdb-container_side mdb-sidebar" >
      <div className="mdb-sidebar__icons">
         <div className="mdb-sidebar-icon"><i className="fa  fa-bars" aria-hidden="true" onClick={this.toggleState.bind(this)} ></i></div>
         <div className="mdb-sidebar-icon"><i className="fa  fa-film" aria-hidden="true" onClick={this.toggleState2.bind(this)} ></i></div>
         <div className="mdb-sidebar-icon"><i className="fa  fa-television" aria-hidden="true"  onClick={this.toggleState2.bind(this)}></i></div>
         <div className="mdb-sidebar-icon"><i className="fa  fa-bar-chart" aria-hidden="true"></i></div>
         <div className="mdb-sidebar-icon"><i className="fa  fa-question-circle-o" aria-hidden="true" ></i></div>
      </div>
      <div className="mdb-sidebar__movies mdb-size">
          {dropdownForm}
      </div>
</div> 
            )
}
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
