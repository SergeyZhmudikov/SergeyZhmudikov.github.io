import React, { Component } from 'react';
import './serials.css';
import {getSerial} from "../service/service-serial.js"



export class Serials extends Component {
    constructor(props){
      super(props);
      this.state = {
        filmArray:[]
                 
      }
      
      
    }
  

    componentWillMount(){
        getSerial().then(response=>{
            let arrFilm = JSON.parse(response).results;
            let a = arrFilm.map((item)=>{
                item.poster_path = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
                return item;
            });
             console.log(a);
              this.setState({filmArray: arrFilm});
            });
    }

    render() {
     
      
      return (
      <div className='mdb-serials'>
        <div className='mdb-serials__container'>
        {this.state.filmArray.map((item,index)=>{
                    return(
                      <img className='mdb-serials__movie' src={item.poster_path} title={item.name} key={item.id}></img>
                    )
                })}
          </div>
      </div>
      );
    }
}







// import React, { Component } from 'react';
// import './movie.css';


// export default class Movies extends Component {
//     constructor(props){
//       super(props);
//     }
//     render() {
//       const myArray = this.props.myMovies;
//       // console.log(myArray);
//       return (
//       <div className='mdb-movies'>
//         <div className='mdb-movies__container'>
//           {
//             myArray.map(function(item){
//               return (
//                 <img className='mdb-movies__movie' src={item.poster_path} title={item.title} key={item.id}></img>
//               );
//             })
//           }
//         </div>
//       </div>
//       );
//     }
// }






























// import React, { Component } from "react";
// import './movie.css';
// import PropTypes from 'prop-types';
 

// export default function Movies(props){
//     const data = require('../../../data.json');
//     const moviesdb = data.movies;
//     const titleName = moviesdb.map((name)=>
//     <a key={name.id} href="" className="mdb-movie__item">
//     <img className="mdb-movie__img" src={name.poster_path} title
// ={name.title}/>
    
//   </a>
//   );
//   return (
//     <div className="mdb-movie">{titleName}
//     </div>
//   );
// }























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