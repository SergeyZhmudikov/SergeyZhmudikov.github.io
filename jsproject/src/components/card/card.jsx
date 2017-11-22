import React, { Component } from 'react';
import './card.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';




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
        
       <div className='mdb-card__image'>{this.props.poster}</div> 
       <div className='mdb-card__title'>{this.props.name}</div>
       <div className='mdb-card__overview'>{this.props.overview}</div>
       <div className='mdb-card__genre'>{this.props.genre}</div>
       <div className='mdb-card__popularity'>{this.props.popularity}</div>
       <div className='mdb-card__vote-average'>{this.props.voteaverage}</div> 
       <div className='mdb-card__recomend'>Some text</div>     
    </div>
            
                      
      );
    }


}