import React, { Component } from "react";
import SideBar from './sidebar/sidebar.jsx';
import DashBoard from './dashboard/dashboard.jsx';



export default class Complete extends Component{
    render(){
        return(
            <div className="container-flex">
                 <SideBar />         
                 <DashBoard />
        </div>
            )
        
}
}