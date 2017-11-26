import React, { Component } from "react";
import './search.css';
import "../../fonts/css/font-awesome.css";




export class Search extends Component{
    constructor(props){
        super(props);
        
        
    }

    

handleSearch(event){
    if(this.props.onChange){
        this.props.onChange(event.target.value);
    }
    // console.log(event.target.value)
            }
   
render(){
    
    return(
    <div className="mdb-search">
        <form action="" className="mdb-search__form">
            <input className="mdb-search__field"
            style = {this.props.searchstyle} 
            type={this.props.inputtype} 
            placeholder={this.props.placeholder}
            
 
            onChange={this.handleSearch.bind(this)}/>
        </form>
         
    </div>  
            )
}
}








// import React, { Component } from "react";
// import './search.css';
// import "../../fonts/css/font-awesome.css";
// import data from "../../../data.json";
// import '../movie list/movie.css';





// export default class Search extends Component{
//     constructor(props){
//         super(props)
//         this.handleSearch = this.handleSearch.bind(this);
//     }
  

// handleSearch(event){
//     let filmsArr = data.movies.filter(function(item){
//         let str = item.title.toLowerCase();
//         let inputStr = event.target.value.toLowerCase();
//         return str.indexOf(inputStr) !== -1;
//      });
//      this.props.onSearch(filmsArr);
//             }
   
// render(){
    
//     return(
//     <div className="mdb-search">
//         <form action="" className="mdb-search__form">
//             <div className="mdb-search__ico"><i className="fa fa-search" aria-hidden="true"></i></div>                 
//             <input className="mdb-search__field" type="text" placeholder="Search..." onChange={this.handleSearch}/>
//         </form>
         
//     </div>  
//             )
// }
// }

