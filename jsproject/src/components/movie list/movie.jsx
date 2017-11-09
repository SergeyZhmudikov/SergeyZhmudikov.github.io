import React, { Component } from "react";
import './movie.css';
import PropTypes from 'prop-types';
 

export default function Movies(props){
    const data = require('../../../data.json');
    const moviesdb = data.movies;
    const titleName = moviesdb.map((name)=>
    <a href="" className="mdb-movie__item">
    <img className="mdb-movie__img" src={name.poster_path} alt={name.title}/>
    
  </a>
  );
  return (
    <div className="mdb-movie">{titleName}
    </div>
  );
}

// export default class Movies extends Component{

//     constructor(props) {
//         super(props);
//         const data = require('../../../data.json');
//         const moviesdb = data.movies;
//         const titleName = moviesdb.map((name)=>
//         <div>
//         {name.poster_path}
//       </div> );
// 	}
//     render(){
 
//   return (
//     <div>{titleName}</div>
//   );
// }}






















// export default class Movies extends Component{
//     	constructor(props) {
// 		super(props);
// 	}

//     render(){

// return (
//   <div>
//     {moviesdb.map((name) => <UserItem name={title}/>)}
//   </div>
// );
// }}













// data = JSON.parse(data);

// alert( data[1] ); 

// export default class Movies extends Component{
    
// 	constructor(props) {
// 		super(props);
// 	}

//     render(){
//         return(
//             <div className="mdb-movie">
//                 <div className="mdb-movie__item">
//                      <div className="mdb-movie-img">{this.props.title}</div>
//                 </div>
//             </div>
//         )
//     }
// }