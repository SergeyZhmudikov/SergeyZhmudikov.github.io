import React, { Component } from 'react';
import './card.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
  import "../../fonts/css/font-awesome.css";
  import {Navigation} from '../navigation/nav.jsx'




export class Card extends Component {
    constructor(props){
      super(props);
    }  

    componentWillMount(){
      console.log(this.props)
  }
    render() {
     
      
      return (
<div className="mdb-card-container">
<div className = "mdb-card-header">
      <Navigation hideAddMovie={true} />
      </div>
    <div className="mdb-card">
        {
                    this.props.movieArray
                        .filter((item)=>{
                            return item.id === parseInt(this.props.match.params.id);
                        })
                        .map((item)=>{
                            return( 
                              <div key={item.id}>
                              <div className='mcontainer'>
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

                              <div className={this.props.hideRecommend?'mdb-card__recomend--hide':'mdb-card__recomend'}> We also recomended: </div>
                              <div className='mdb-card__wrapper'> 
                              <div className={this.props.hideRecommend?"mdb-card__recomend_array--hide":"mdb-card__recomend_array"}>  
                              
                              {this.props.recomArr
                              .map((item)=>{
                               return( 
                                <NavLink to={`/recommendations/${item.id}`} key={item.name + "card"}>
                    
                                <div key={item.id}>
                                <img className='mdb-card__image-small' title={item.name} src={item.poster} ></img>
                              
                                </div>
                                </NavLink>
                              );
                        })
                }
                </div>
                              </div> 
                              
                              </div>
                              );
                        })
                }
       
            
    </div>
    </div>      
                      
      );
    }


}