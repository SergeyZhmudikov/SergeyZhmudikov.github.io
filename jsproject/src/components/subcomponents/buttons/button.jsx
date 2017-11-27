import React, { Component } from "react";
// import './input.block.css';


export class Button extends Component{
    constructor (props){
        super(props);}
        
        
        // btnclick() {
        //     if (this.props.onChange) {
        //         this.props.onChange(event.target.value);
        //     }
        // }
        
        

    render(){
        
        return(
                        
                           <button className={this.props.className}
                           style = {this.props.addstyle}
                               
                            // style={{
                            //     width: `${this.props.width}`,
                            //     height: `${this.props.height}`,
                            //     backgroundColor: `${this.props.backgroundColor}`}}
 
                            onClick={this.props.btnclick}>
                            {this.props.btnname}
                           </button>
                            )
                           
                
              
}
}
