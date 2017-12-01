import React, { Component } from "react";
import {connect} from "react-redux";
import "./genres.style.css";
import { genreDataInit } from '../../store/actions';

class Genreblock extends Component {
  
    constructor(props) {
    super(props);
    this.props.genreDataInit();
    this.arrgenres = [];
  }

  handleGenreChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target);
      // console.log(event.target.name);
    }
    
  }

  render() {
    return (
      <div
        className="mdb__genre-list"
        onChange={this.handleGenreChange.bind(this)}>        
        {this.props.arrgenres.map(item => {
          return (
            <div className="mdb__genre-item" key={item.name}>
              <input type="checkbox" 
              name={item.id} 
              value={this.props.genrevalue}/>
              <label>{item.name}</label>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    let arrgenres = state.genre.genre;
    return {
        arrgenres
    };
};

const mapDispatchToProps = (dispatch) => ({
    genreDataInit: () => {
        dispatch(genreDataInit());
    } 
});

export const Genres = connect(mapStateToProps, mapDispatchToProps)(Genreblock);