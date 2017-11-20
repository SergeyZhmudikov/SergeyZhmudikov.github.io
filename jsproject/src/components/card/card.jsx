import React, { Component } from 'react';
import './card.css';




export class Card extends Component {
    constructor(props){
      super(props);
    }  

    componentWillMount(){
      this.setState({
        isCardOpen: !this.props.isCardOpen});
  }
    render() {
     
      
      return (

    
    <div className={(this.props.isCardOpen)?"mdb-card":"mdb-card-hide"}>
        
       <div className='mdb-card__image'>{this.props.poster_path}</div> 
       <div className='mdb-card__title'>{this.props.title}</div>
       <div className='mdb-card__overview'></div>
       <div className='mdb-card__genre'></div>
       <div className='mdb-card__popularity'></div>
       <div className='mdb-card__vote-average'></div> 
       <div className='mdb-card__recomend'></div>     
    </div>
            
                      
      );
    }


}