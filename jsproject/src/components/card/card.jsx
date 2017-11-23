import React, { Component } from 'react';
import './card.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
  import "../../fonts/css/font-awesome.css";




export class Card extends Component {
    constructor(props){
      super(props);
    }  

    componentWillMount(){
      console.log(this.props)
  }
    render() {
     
      
      return (

    
    <div className="mdb-card">
        {
                    this.props.movieArray
                        .filter((item)=>{
                            return item.id === parseInt(this.props.match.params.id);
                        })
                        .map((item)=>{
                            return( 
                              <div key={item.id}>
                              <div className='container'>
                              <img className='mdb-card__image' src={item.poster} ></img>
                              <div className='review'>
                              <div className='mdb-card__title'>{item.name}</div>
                               <div className='mdb-card__overview'>{item.overview}</div>
                               </div>
                               </div>
                               <div className='review_vote'>
                              <div className='mdb-card__genre'>Genre: {item.genre}</div>
                              
                              <div className='mdb-card__popularity'>Popularity: {item.popularity}</div>
                              <div className='mdb-card__vote-average'> Vote average: {item.voteaverage}</div> 
                              </div>
                              <div className='mdb-card__recomend'> We also recomended: </div>
                              <div className='mdb-card__recomend_array'>  
                              {this.props.movieArray
                              .map((item)=>{
                               return( 
                                <div key={item.id}>
                                <img className='mdb-card__image-small' src={item.poster} ></img>
                              
                                </div>
                              );
                        })
                }
                              </div> 
                              
                              </div>
                              );
                        })
                }
       
            
    </div>
            
                      
      );
    }


}