import React, { Component } from 'react';
import './movie.css';
import '../../fonts/css/font-awesome.css'


export class Movies extends Component {
    constructor(props){
      super(props);
      
         
    } 
    
    
    addItemToLibrary(){
        if(this.props.addToLibrary){
            this.props.addToLibrary(this.props.data);
        }
    }

    deleteItemFromLibrary(){
      if(this.props.deleteFromLibrary){
          this.props.deleteFromLibrary(this.props.data);
      }
  }
    
   

    render() {
     
      
      return (
    <div className='mdb-movies__container' >
   
          <div className='mdb-movies__movie' 
          style={{backgroundImage: `url(${this.props.poster})`}}
          title={this.props.name}>
           <div className='mdb-movies_hover'>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.deleteItemFromLibrary.bind(this)}></i> 
                <i className={this.props.hideSaveIcon?"fa fa-floppy-o":"fa fa-floppy-o__hide"} aria-hidden="true" onClick={this.addItemToLibrary.bind(this)}></i> 
                <i className="fa fa-info" aria-hidden="true"title={this.props.overview}></i>
         </div>
         {this.props.children} 
          </div>
    </div>
    
    
            
                      
      );
    }


}


