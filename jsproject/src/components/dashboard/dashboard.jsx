import React, { Component } from "react";
import './dashboard.css';
import Search from '../search/search.jsx';
import Navigation from '../navigation bar/nav.jsx';
import Movies from '../movie list/movie.jsx';


export default  class DashBoard extends Component{
render(){
    return(
<div className="mdb-container-dash mdb-dashboard">
<div className="mdb-dashboard_content">
<div className="mdb-dashboard__nav">
<Navigation/>
</div>
<div className="mdb-dashboard__search">
<Search/>
</div>

</div>
{/* <div className="mdb-dashboard__movies">
<Movies/>
</div> */}
</div>
            )
}
}





