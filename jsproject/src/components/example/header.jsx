import React, { Component } from 'react';
import './movie.css';

import EntityService from './entity.service'



export default class Movies extends Component {
    constructor(props){
      super(props);
      this.state = {
        filmArray:[],                
      }
      
      
    }
  }
   


    render() {
     
      
      return (
      <div className='mdb-movies'>
        <div className='mdb-movies__container'>
        {this.state.filmArray.map((item,index)=>{
                    return(
                      <img className='mdb-movies__movie' 
                      src={item.poster_path} 
                      title={item.title} 
                      key={item.id}></img>
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