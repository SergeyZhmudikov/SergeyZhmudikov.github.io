import React, { Component } from 'react';
import './movie.css';
import '../../fonts/css/font-awesome.css'


export class Movies extends Component {
    constructor(props){
      super(props);
      // this.state={
      //   isHover: false
      // }
         
    } 
    
    
    addItemToLibrary(){
        if(this.props.addToLibrary){
            this.props.addToLibrary(this.props.data);
        }
    }


    
    // isHoverMouse(){
    //   this.setState({
                
    //     isHover:!this.state.isHover});
    // }

    render() {
     
      
      return (




    <div className='mdb-movies__container' >
   
          <div className='mdb-movies__movie' 
          style={{backgroundImage: `url(${this.props.poster})`}}
          title={this.props.name}
          >
           <div className='mdb-movies_hover'>
            <div className='mdb-movies_icons'>
          <i className="fa fa-floppy-o" aria-hidden="true" onClick={this.addItemToLibrary.bind(this)}></i> 
         <i className="fa fa-info" aria-hidden="true"title={this.props.overview}></i>
          </div>
    </div>
          </div>
    </div>
    
    
            
                      
      );
    }


}

{/* <i class="fa fa-floppy-o" aria-hidden="true"></i> */}
{/* <i class="fa fa-info" aria-hidden="true"></i> */}
{/* <i class="fa fa-trash-o" aria-hidden="true"></i> */}