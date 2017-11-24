import React, { Component } from "react";
import './nav.css';
// import Addform from "../add_form/addform.jsx"

import {connect} from "react-redux";
import { toggleForm } from "../../store/actions"; 


export class Nav extends Component{
    constructor(props){
        super(props);
        }

    

    // toggleState(){
    //     if(this.props.AddMovie){
    //         this.props.AddMovie();
    //     }
    // }
    

render(){
       
    return(
    <div className="mdb-nav">
    <div>
        <div className="mdb-nav__add mdb-nav-link" onClick={this.props.toggleForm}>Add movie</div>
        <span>|</span>
        <div className="mdb-nav__about mdb-nav-link">About</div>
        <span>|</span>
        <div className="mdb-nav__priority mdb-nav-link">Pricing</div>
        <span>|</span>
        <div className="mdb-nav__blog mdb-nav-link">Blog</div>
        </div>       
                     
    </div> 
    )
            
}
}
const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => dispatch(toggleForm())
});

const mapStateToProps = (state) =>{
    var isOpened= state.form.isFormOpened;
    return{
        isOpened
    };
};

export const Navigation = connect(mapStateToProps,mapDispatchToProps)(Nav);


// export default class Navigation extends Component{
//     constructor(props){
//         super(props);
//         this.state = {isOpened:false};
//     }

//     toggleState(){
//         this.setState({isOpened:!this.state.isOpened});
//     }

    

// render(){
//     let dropdownForm;
//     if (this.state.isOpened){
//         dropdownForm = <Addform/>;
//     }
//     return(
//     <div className="mdb-nav">
//     <div>
//         <div className="mdb-nav__add mdb-nav-link" onClick={this.toggleState.bind(this)}>Add movie</div>
//         <span>|</span>
//         <div className="mdb-nav__about mdb-nav-link">About</div>
//         <span>|</span>
//         <div className="mdb-nav__priority mdb-nav-link">Pricing</div>
//         <span>|</span>
//         <div className="mdb-nav__blog mdb-nav-link">Blog</div>
//         </div>       
//         <div className="mdb-nav__dropdown">{dropdownForm}</div>             
//     </div> 
//     )
            
// }
// }

