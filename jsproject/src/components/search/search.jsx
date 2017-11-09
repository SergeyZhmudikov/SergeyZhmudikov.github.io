import React, { Component } from "react";
import './search.css';
import "../../fonts/css/font-awesome.css";



export default class Search extends Component{
render(){
    return(
    <div className="mdb-search">
        <form action="" className="mdb-search__form">
            <div className="mdb-search__ico"><i class="fa fa-search" aria-hidden="true"></i></div>                 
            <input className="mdb-search__field" type="text" placeholder="Search..."/>
         </form>
    </div>  
            )
}
}
