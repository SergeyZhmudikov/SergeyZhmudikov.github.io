import React, { Component } from "react";
import './dashboard.css';
import Search from '../search/search.jsx';
import Navigation from '../navigation bar/nav.jsx';
import Movies from '../movie list/movie.jsx';


export default  class DashBoard extends Component{
render(){
    return(
<div className="mdb-container-dash mdb-dashboard">
<div className="mdb-dashboard__content">
<Search/>
<Navigation/>
</div>
<Movies/>

</div>
            )
}
}





