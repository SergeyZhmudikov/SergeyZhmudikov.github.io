import React, { Component } from "react";
import './advanced.search.style.css';
import {CLOSE_ADVANCED_SEARCH} from "../../store/actions";
import {connect} from "react-redux";
import {Textarea} from '../../components/subcomponents/input/text.area.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx'
import {Genres} from '../genres/genres.jsx'
import {Button} from '../subcomponents/buttons/button.jsx'

class AdvancedSearch extends Component{
    constructor (props){
        super(props);}
       


        handleAdultGenreChange(event){
            // const targetAdult = event.target.name;
            // const valueAdult = event.target.id;
            // // console.log('targetAdult',targetAdult);
            // // console.log('valueAdult',valueAdult);
            // this.setState((prevState) => ({
            //     genre: prevState.genre.concat(valueAdult)
            //     }));
            //     console.log(this.state.genre)
        }
        handleRememberChange(event){

        }

    render(){
       
        return(
            <div className= {(this.props.isAdvSearchOpened)?"mdb-advanced-search":"mdb-advanced-search-hide"}>              
            <div className='mdb-advanced-search-wrapper'>
            <div className="mdb-advanced-search__header">Advanced search</div>
           <hr/>

           <div className='mdb-column-left'>
           <div className="mdb-advanced-search__title">
           <div className="search-title">Title</div>
           <Inputblock
           placeholder = 'Title'
           inputtype = 'text'
            inputstyle = {{width: 250+'px',
           height: 30+'px'}}
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
           <div className="mdb_search_genres__title">Genres</div>
           <div className="mdb_search_genres__list"><Genres/></div>    
           </div>
           </div>
           
           <div className='mdb-column-right'>
           <div className="mdb-advanced-search__genres-adult">
           <div className="genre-adult__title">Adult</div>
           <div className="genre-adult__checkbox">
           <input type="checkbox" 
                            onChange={this.handleAdultGenreChange.bind(this)}
                            name="Adult" 
                            id="18+"/>
           </div>                
                            
                        
           </div>
           <div className="mdb-advanced-search__popularity">
           </div>
           <div className="mdb-advanced-search__vote_average">
           </div>
           <div className="mdb-advanced-search__remember">
           <div className="genre-adult__title">Remember inputs</div>
           <div className="genre-adult__checkbox">
           <input type="checkbox" 
            onChange={this.handleRememberChange.bind(this)}
                            name="Remember" 
                            id="SS"/>
           </div>                
                            
                
           </div>
           <div className="mdb-advanced-search__search_button">
           <Button
           className='mdb-advanced-btn'
            btnname='Search'/>
           </div>

            </div>
            </div>
            </div>              )
                           
                
              
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

