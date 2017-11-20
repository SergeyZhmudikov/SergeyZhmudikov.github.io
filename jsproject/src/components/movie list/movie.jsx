import React, { Component } from 'react';
import './movie.css';



export class Movies extends Component {
    constructor(props){
      super(props);
      this.state = {
        isCardOpen:false,
        } 
    }  

    // onClickOpenCard(){
    //   if(this.props.AddCard){
    //     this.props.AddCard();
        
    // }
    //   };

      onClickOpenCard(){
        console.log(this.state.isCardOpen);
        this.setState({
          isCardOpen: !this.state.isCardOpen});
    }
   
    

    render() {
     
      
      return (

    <div className='mdb-movies__container' >
    <div className='mdb-movies__movie' 
    style={{backgroundImage: `url(${this.props.poster})`}}
    onClick={this.onClickOpenCard.bind(this)}></div>
     
     <div className={(this.state.isCardOpen)?"mdb-card":"mdb-card-hide"}>
        {/* <img className='mdb-card__image'src={this.props.poster_path}/>  */}
       <div className='mdb-card__title'>{this.props.name}</div>
       <div className='mdb-card__overview'>{this.props.overview}</div>
       <div className='mdb-card__genre'></div>
       <div className='mdb-card__popularity'></div>
       <div className='mdb-card__vote-average'></div> 
       <div className='mdb-card__recomend'></div>     
    </div>
    </div>
    
    
            
                      
      );
    }


}