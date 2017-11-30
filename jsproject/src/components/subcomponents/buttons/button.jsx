import React, { Component } from "react";
// import './input.block.css';


export class Button extends Component{
    constructor (props){
        super(props);}
        
        
        
        

    render(){
        
        return(
                        
                           <button className={this.props.className}
                           style = {this.props.addstyle}
                               
                            
                            onClick={this.props.btnclick}>
                            {this.props.btnname}
                           </button>
                            )
                           
                
              
}
}
