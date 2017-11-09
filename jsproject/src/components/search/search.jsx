import React, { Component } from "react";
import './search.css';
import "../../fonts/css/font-awesome.css";
import data from "../../../data.json";
import '../movie list/movie.css';





export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = { display: data.movies }
        this.handleSearch = this.handleSearch.bind(this)
      }
      
  

handleSearch(event){
        let searchQuery = event.target.value.toLowerCase();
        // console.log(searchQuery)
        let display = data.movies.filter(function(el){
            let show = el.title.toLowerCase();
            return show.indexOf(searchQuery)!== -1;
        })
    //    console.log(show)
       this.setState({display:display})
        }
   


render(){
    
    return(
    <div className="mdb-search">
        <form action="" className="mdb-search__form">
            <div className="mdb-search__ico"><i className="fa fa-search" aria-hidden="true"></i></div>                 
            <input className="mdb-search__field" type="text" placeholder="Search..." onChange={this.handleSearch}/>
         </form>
         <div className="mdb-movie">
         {this.state.display.map(function(el) {
        return <div className="mdb-movie__item"> <img className='mdb-movie__img' src={el.poster_path} key={el.id} title={el.title}></img></div>
                       })
                    }
         </div>
    </div>  
            )
}
}








































// import React, { Component } from "react";
// import './search.css';
// import "../../fonts/css/font-awesome.css";
// import data from "../../../data.json"





// export default class Search extends Component{
//     constructor(props){
//         super(props);
//         this.inputArray =  data.movies
//       }
//     //   getInitialState(){
//     //       return showFilms = data.movies;
//     //   }

//     // handleSearch(event){
//     //     let searchQuery = event.target.value.toLowerCase();
//     //     console.log(searchQuery)
//     //     let displayFilm  = showFilms.filter(function(el){
//     //         let searchValue = el.title.toLowerCase();
//     //         return searchValue.indexOf(searchQuery) !==-1;
//     //     }
      
    













    
//     // handleSearch(event)
//     // {
//     //     let showFilms = data.movies.filter(function(el){
//     //        let displayFilm = el.title.toLowerCase();
//     //        let searchValue = event.target.value.toLowerCase();
//     //        return displayFilm.indexOf(searchValue) === 0;
//     //     });
//     //     this.props.onSignUp(showFilms);
//     //   }
  

// render(){
//     return(
//     <div className="mdb-search">
//         <form action="" className="mdb-search__form">
//             <div className="mdb-search__ico"><i className="fa fa-search" aria-hidden="true"></i></div>                 
//             <input className="mdb-search__field" type="text" placeholder="Search..." onChange={this.handleSearch}/>
//          </form>
//          <div className="result">
         
//          </div>
//     </div>  
//             )
// }
// }







// // let dataArr = data.movies.filter(function(name){
// //     let txt = name.title.toLowerCase();
// //     let inputText = event.target.value.toLowerCase();
// //     return txt.indexOf(inputText) === 0;
// //  });
// //  this.props.onSignUp(dataArr);





// // export default function Search(props){
// //     const data = require('../../../data.json');
// //     const moviesdb = data.movies;
// //     getInitialState: function(){
// //         return{
// //             displayFilm: moviesdb
// //         };
// //     };

// // const titleName = moviesdb.map((name)=>
// // <a key={name.id} href="" className="mdb-movie__item">
// // <img className="mdb-movie__img" src={name.poster_path} title
// // ={name.title}/>


// // handleSearch: function (event){
// // let searchQuery = event.target.value.toLowerCase();

// // };

// // render: function(){
// //     return(
// //     <div className="mdb-search">
// //         <form action="" className="mdb-search__form">
// //             <div className="mdb-search__ico"><i className="fa fa-search" aria-hidden="true"></i></div>                 
// //             <input className="mdb-search__field" type="text" placeholder="Search..." onChange={this.handleSearch}/>
// //          </form>
// //     </div>  
// //             )
// // }
// // }

