import React, { Component } from "react";
import './dashboard.css';
import Search from '../search/search.jsx';
import Navigation from '../navigation bar/nav.jsx';
import Movies from '../movie list/movie.jsx';
import Addform from '../add_form/addform.jsx';
import SideBar from '../sidebar/sidebar.jsx';
import Serials from '../serials/serials.jsx';
// import data from "../../../data.json";
// import getMovie from "../service/service-movie.js"

export default class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
        isOpened:false,
        isBackOpened:true}  
}     
        isOpened(){
            this.setState({isOpened:!this.state.isOpened});
            }
        isBackOpened(){
            this.setState({isBackOpened:!this.state.isBackOpened});
                }

        onClickCancelForm(){
            this.setState({
            isOpened: !this.state.isOpened
                    });
                }
        render()
{
        let dropdownForm;
        if (this.state.isOpened){
            dropdownForm = <Addform/>;
        }
        let slideMenu;
        if (this.state.isBackOpened){
            slideMenu =<Movies/> ;
        }
        else{
            slideMenu=<Serials/>;
        }
        
    return(
        <div className="container-flex">
            <SideBar isBackOpened={this.isBackOpened.bind(this)} />  
                <div className="mdb-container-dash mdb-dashboard">
                <div className="mdb-dashboard_content">
                <div className="mdb-dashboard__nav">
                    <Navigation isOpened={this.isOpened.bind(this)}/>
                </div>
                <div className="mdb-dashboard__search">
                    <Search />
                </div>
                </div>
                <div className="mdb-dashboard__dropdown">
                {dropdownForm}
                </div>
                {slideMenu}
                </div>
        </div>          )
}

}







// import React, { Component } from "react";
// import './dashboard.css';
// import Search from '../search/search.jsx';
// import Navigation from '../navigation bar/nav.jsx';
// import Movies from '../movie list/movie.jsx';
// import Addform from '../add_form/addform.jsx';
// import data from "../../../data.json";


// export default class DashBoard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         isOpened:false,

//         filmArray: data.movies,
           
//     }
//          this.updateArr = this.updateArr.bind(this);
    
// }      
//         updateArr(a) {
//         this.setState({filmArray: a});
//         }

//         isOpened(){
//             this.setState({isOpened:!this.state.isOpened});
//             }

//         render()
// {
//         let dropdownForm;
//         if (this.state.isOpened){
//             dropdownForm = <Addform/>;
//         }

//     return(
// <div className="mdb-container-dash mdb-dashboard">
//     <div className="mdb-dashboard_content">
//         <div className="mdb-dashboard__nav">
//             <Navigation isOpened={this.isOpened.bind(this)}/>
//         </div>
//         <div className="mdb-dashboard__search">
//         <Search array={this.state.filmArray} onSearch={this.updateArr}/>
//         </div>
//     </div>
//     <div className="mdb-dashboard__movies">
//     {dropdownForm}
//     <Movies myMovies={this.state.filmArray}/>
//     </div>
//     <div className="mdb-movie">
    

//     </div>
// </div>
//             )
// }

// }
