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
        
        
        }



    componentWillMount() {
        console.log(this.props)
        
        
        
    }

    
          


    render() {

        return ( 
            <div className = "mdb_supportView_container">
            
            <div className = "mdb-support-header">           
            <Navigation  hideAddMovie={true} />
            </div>
            
            <div className = "mdb-dashboard__support"> 
            <div className="support-title">Request</div>
            
            <div className="support-name_block">
            <div className="support-name">Name</div>
            
            <Inputblock
                placeholder = 'Text'
             inputtype = 'text'
           
            inputstyle = {{width: 400+'px',
            height: 30+'px',
           
             }}/>
           </div>
           <div className="support-description_block">
           <div className="support-description">Description</div>
            <Textarea
            placeholder = 'Overview'
             rows = '10'
             txtareastyle = {{width: 650+'px'}}
            />
           </div>
           <div className="support-buttons_block">
           <div className="support-submit_btn">
            <Button 
            className='mdb-submit-btn'          
            btnname='Submit'/>
            </div>
            <div className="support-cancel_btn">
            <Button
            className='mdb-cancel-btn'
            btnname='Cancel'/>
            </div>
           </div>
                
                
                                
                        
            </div>
                </div> )
        }

    }
