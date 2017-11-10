import React, { Component } from "react";
import './addform.css';
import "../../fonts/css/font-awesome.css";


export default class Addform extends Component{

    


    render(){
        
        return(
        <div className="mdb-addform">
            <div className="mdb-addform__txtinput txtinput">
                <p className="txtinput__header" >Add movie</p>
                <hr/>
                <p className="txtinput__subheader">Title</p>
                <input className="txtinput__field" type="text"/>
                 <p className="txtinput__subheader">Overview</p>
                <textarea className="txtinput__area" name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className="mdb-addform__genre txtinput">
                <p className="txtinput__subheader">Genre</p>
                <div className="genre">
                    <input id="Action" type="checkbox"/>
                    <input id="Adventure" type="checkbox"/>
                    <input id="Thriller" type="checkbox"/>
                    <input id="Comedy" type="checkbox"/>
                    <input id="Fantasy" type="checkbox"/>
                    <input id="Drama" type="checkbox"/>
                    <input id="Horror" type="checkbox"/>
                    <input id="Criminal" type="checkbox"/>
                    <input id="War" type="checkbox"/>
                    <input id="Documentary" type="checkbox"/>
                </div>
                <input id="Adult" type="checkbox"/>
            </div>
            <div className="mdb-addform__upload_bar txtinput">
            <button className="mdb-addform__btn">Add</button>
            <button className="mdb-addform__btn">Cancel</button></div>
        </div>
    )}
}