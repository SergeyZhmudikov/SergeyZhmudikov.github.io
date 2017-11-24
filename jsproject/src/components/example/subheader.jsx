import React, { Component } from "react";
import './subheader.css';

export default class Subheader extends Component{
    constructor(props){
        super(props);
        
}

handleSearch(event){
    if(this.props.onChange){
        this.props.onChange(event.target.value);
    }
    console.log(event.target.value)
            }

render(){
    
return(
    
    <input type='text' onChange={this.handleSearch.bind(this)}></input>
)
}}

