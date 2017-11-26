import React, { Component } from "react";
import './search.btn.css';
import { toggleSearch } from "../../../store/actions"; 
import {connect} from "react-redux";
export class Searchbtn extends Component{
    constructor (props){
        super(props);}
       
    render(){
        
        return(
            <div className="mdb-search-button"                 
                            onClick={this.props.toggleSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
            </div>
                            )
                           
                
              
}
}
const mapDispatchToProps = (dispatch) => ({
    toggleSearch: () => dispatch(toggleSearch())
});

const mapStateToProps = (state) =>{
    let isAdvSearchOpened= state.search.isSearchOpen;
    return{
        isAdvSearchOpened
    };
};

export const SearchButton = connect(mapStateToProps,mapDispatchToProps)(Searchbtn);
