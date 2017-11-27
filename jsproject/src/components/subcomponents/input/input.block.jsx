import React, { Component } from "react";
import './input.block.style.css';
import "../../../fonts/css/font-awesome.css";




export class Inputblock extends Component{
    constructor(props){
        super(props);
        
        
    }

    

handleInput(event){
    if(this.props.onChange){
        this.props.onChange(event.target.value);
    }
    
            }
   
render(){
    
    return(
    <div className="mdb-input">
       
            <input className="mdb-input__field"
            style = {this.props.inputstyle} 
            type={this.props.inputtype} 
            placeholder={this.props.placeholder}
            
 
            onChange={this.handleInput.bind(this)}/>
        
         
    </div>  
            )
}
}





