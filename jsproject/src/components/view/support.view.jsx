import React, { Component } from "react";
import { connect } from 'react-redux';

import '../movie list/movie.css';

import { Navigation } from "../navigation/nav.jsx" ;
import './support.view.style.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


import {Textarea} from '../../components/subcomponents/input/text.area.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx';
import {Button} from '../../components/subcomponents/buttons/button.jsx';






export class SupportView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            overview: ''
            
        };
        this.onTitleSupChange = this.onTitleSupChange.bind(this);       
        this.onOverviewSupChange = this.onOverviewSupChange.bind(this);
        }



    componentWillMount() {
        console.log(this.props)
        
        
        
    }

    onTitleSupChange(value){
        let inputTitle = value;
        console.log(inputTitle);
        this.setState({title: inputTitle});
    }
  
    onOverviewSupChange(value){
        let inputOverview = value;
        console.log(inputOverview);
        this.setState({overview: inputOverview});
    }

    handleSubmitSupport(){
               
        let item = {
            title: this.state.title,
            overview: this.state.overview,
            id: new Date().valueOf()
        }
        let supportString = JSON.stringify(item);
        localStorage.setItem('Support', supportString);
    
    
    }
    handleCancelSupport(){
                
        localStorage.removeItem('Support');
    
    
    }


    render() {

        return ( 
            <div className = "mdb_supportView_container">
            
            <div className = "mdb-support-header">           
            <Navigation hideAddMovie={true} />
            </div>
            
            <div className = "mdb-dashboard__support"> 
            <div className="support-title">Request</div>
            <form name="support_form" >
            <div className="support-name_block">
            <div className="support-name">Name</div>
            
            <Inputblock
                placeholder = 'Text'
             inputtype = 'text'
             onChange={this.onTitleSupChange.bind(this)}
            inputstyle = {{width: 400+'px',
            height: 30+'px'
           
             }}/>
           </div>
           <div className="support-description_block">
           <div className="support-description">Description</div>
            <Textarea
             onChange={this.onOverviewSupChange.bind(this)}
            placeholder = 'Overview'
             rows = '10'
             txtareastyle = {{width: 650+'px'}}
            />
           </div>
           <div className="support-buttons_block">
           <div className="support-submit_btn">
            <Button 
            btnclick = {this.handleSubmitSupport.bind(this)}
            className='mdb-submit-btn'          
            btnname='Submit'/>
            </div>
            <div className="support-cancel_btn">
            <Button
            btnclick = {this.handleCancelSupport.bind(this)}
            className='mdb-cancel-btn'
            btnname='Cancel'/>
            </div>
            
           </div>
           </form>   
                
                                
                        
            </div>
                </div> )
        }

    }
