import React, { Component } from "react";
import './text.area.style.css';


export class Textarea extends Component{
    constructor (props){
        super(props);}
        
        
        handleOverviewChange(event) {
            if (this.props.onChange) {
                this.props.onChange(event.target.value);
            }
        }
        
        

    render(){
        
        return(
                        <div className="mdb-input">   
                           <textarea
                            className="mdb-input__field"
                            style = {this.props.txtareastyle} 
                            type={this.props.inputtype}
                            value = {this.props.inputAreaValue}
                            name={this.props.inputname}
                            placeholder={this.props.placeholder}
                            onChange={this.handleOverviewChange.bind(this)}
                            rows={this.props.rows} >
                            </textarea>
                            </div>)
                           
                
              
}
}
