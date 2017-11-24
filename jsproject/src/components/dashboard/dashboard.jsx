import React, { Component } from "react";
import './dashboard.css';

import {MovieView} from '../view/movie.view.jsx'


import {Sidebar} from '../sidebar/sidebar.jsx';

import {
    menuView,
    movieView,
    showView, 
    libraryView,
    supportView,
    formView} 
    from '../../store/actions';


import { connect } from 'react-redux';
import {sidebar} from "../../store/reducers/index.js"


class Dashboard extends Component{

    constructor(props){
        super(props);
        
    }
    

        render()
{
        
    return(
        <div className="container-flex">
            
            <Sidebar
           
           openSidebar={this.props.clickmenu}
           movieView = {this.props.movieView}
            menuView = {this.props.menuView}
            showView = {this.props.showView}
            libraryView = {this.props.libraryView}
            supportView = {this.props.supportView} /> 
                <div className="Navigation block">
                <MovieView/>
                
                </div>
            
        </div>          )
}

}
const mapStateToProps = (state) => {
       const clickmenu = state.sidebar.menu;
       
       return {
         clickmenu
         
    };
    };
    
    const mapDispatchToProps = (dispatch) => ({
        menuView: (menu) => dispatch(menuView(menu)),
        movieView: (movie) => dispatch(movieView(movie)),
        showView: (serial) => dispatch(showView(serial)),
        libraryView: () => dispatch(libraryView()),
        supportView: () => dispatch(supportView()),
        // formView: (form) => dispatch(formView(form))
    });
    
    export const Root = connect(mapStateToProps, mapDispatchToProps)(Dashboard);






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