import React, { Component } from "react";
import './advanced.search.style.css';

import {
    CLOSE_ADVANCED_SEARCH

} from "../../store/actions";
import {connect} from "react-redux";
import {Textarea} from '../../components/subcomponents/input/text.area.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx'

class AdvancedSearch extends Component{
    constructor (props){
        super(props);}
       
    render(){
       
        return(
            <div className= {(this.props.isAdvSearchOpened)?"mdb-advanced-search":"mdb-advanced-search-hide"}>              
            <div className="mdb-advanced-search__header">Advanced search</div>
           <hr/>
           <div className="mdb-advanced-search__title">
           <div className="search-title">Title</div>
           <Inputblock
           placeholder = 'Title'
           inputtype = 'text'
           
           inputstyle = {{width: 250+'px',
           height: 30+'px',
           
           }}
           />
           </div>
           <div className="mdb-advanced-search__overview">
           <div className="search-title">Overview</div>
           
           <Textarea
           placeholder = 'Overview'
           rows = '6'
           txtareastyle = {{width: 250+'px'
            }}
           />
           </div>
           <div className="mdb-advanced-search__genres">
           </div>
           <div className="mdb-advanced-search__genres-adult">
           </div>
           <div className="mdb-advanced-search__popularity">
           </div>
           <div className="mdb-advanced-search__vote_average">
           </div>
           <div className="mdb-advanced-search__remember">
           </div>
           <div className="mdb-advanced-search__search_button">
           </div>

            </div>
                            )
                           
                
              
}
}

const mapStateToProps = (state) =>{
    let isAdvSearchOpened = state.search.isSearchOpen;
    return{
        isAdvSearchOpened
    };
};

const mapDispatchToProps = (dispatch) =>({
    closeSearch: (event)=> {
        dispatch(closeSearch())
        event.preventDefault();
    }    
})

export const SuperSearch = connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);

