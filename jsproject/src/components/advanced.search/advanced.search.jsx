import React, { Component } from "react";
import './advanced.search.style.css';
import {advancedMovieGenre,
    advancedMovieAdult,
    advancedMovieTitle,
    advancedMovieOverview,
    saveMovieSearchConfig
} from "../../store/actions";
import {connect} from "react-redux";
import {Textarea} from '../../components/subcomponents/input/text.area.jsx';
import {Inputblock} from '../../components/subcomponents/input/input.block.jsx'
import {Genres} from '../genres/genres.jsx'
import {Button} from '../subcomponents/buttons/button.jsx'



class AdvancedSearch extends Component{
    constructor (props){
        super(props);
        // this.state = {
        //     isConfigSaved: false
        // };


        // this.state = {
        //     name: '',
        //     overview: '',
        //     genre: [] ,
        //     remember: '',
        //     // remValue: true
        // };
        // this.onTitleSearchChange = this.onTitleSearchChange.bind(this); 
        // this.onOverviewSearchChange = this.onOverviewSearchChange.bind(this); 
        // this.handleGenreSearchChange = this.handleGenreSearchChange.bind(this); 
        // this.handleAdultGenreSearchChange = this.handleAdultGenreSearchChange.bind(this); 
        // this.handleRememberSearchChange = this.handleRememberSearchChange.bind(this); 
        // this.handleSubmitSearch = this.handleSubmitSearch.bind(this); 
        
    }

        onTitleSearchChange(value){
            this.props.advancedMovieTitle(value);
                // let inputTitle = value;
                // console.log(inputTitle);
                // this.setState({name: inputTitle});
            }
          
            onOverviewSearchChange(value){
                this.props.advancedMovieOverview(value);
                // let inputOverview = value;
                // console.log(inputOverview);
                // this.setState({overview: inputOverview});
            }
            handleGenreSearchChange(event){



            //     const target = event.name;
            //     const value = event.name;
            //     // console.log('target',target);
            //     // console.log('valuevalue', value);              
            //     if (event.checked === true) {
            //         this.setState((prevState) => ({
            //             genre: prevState.genre.concat(value)
            //             }));
            //             console.log(this.state.genre)
            //     } else {
            //         this.setState((prevState) => ({
            //             genre: prevState.genre.filter((item) => {
            //         return item !== value;
            //     })
            //         }));
                
            // }
        }
            
            handleAdultGenreSearchChange(event){

                
                // const targetAdult = event.target.name;
                // const valueAdult = event.target.name;
                // // console.log('targetAdult',targetAdult);
                // // console.log('valueAdult',valueAdult);
                // this.setState((prevState) => ({
                //     genre: prevState.genre.concat(valueAdult)
                //     }));
                //     console.log(this.state.genre)
            }


            handleRememberSearchChange(event){
            //     const saveData = event.target.checked;
            //     // console.log(saveData);
            //     // event.preventDefault(); 
            //     let saveitem = {
            //         name: this.state.name,
            //         overview: this.state.overview,
            //         genre: this.state.genre,
            //         poster: this.state.poster,
            //         // id: new Date().valueOf()
            //   }
            //     if(saveData){
            //         let saveString = JSON.stringify(saveitem);
            //         sessionStorage.setItem('SaveSearch', saveString);
            //     }
            //     else{                   
            //     }

            }
            handleSubmitSearch(){
                // this.props.saveMovieSearchConfig();
                if(this.props.searchItemsAdvanced){
                    this.props.searchItemsAdvanced();
                }
            //     e.preventDefault();
            //     let saveitem = {
            //         name: this.state.name,
            //         overview: this.state.overview,
            //         genre: this.state.genre,
            //         poster: this.state.poster,
            //         // id: new Date().valueOf()
            //   }
            //   let saveString = JSON.stringify(saveitem);
            //   localStorage.setItem('AdvancedSearch', saveString)
            //   this.props.searchItemsAdvanced(saveitem);
            }




            // if(this.props.searchItemsAdvanced){
            //     this.props.searchItemsAdvanced(saveitem);
            //   }


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
           isdisabled = {true}
           onChange={this.onTitleSearchChange.bind(this)}
           placeholder = 'Title'
           inputtype = 'text'
            inputstyle = {{width: 250+'px',
           height: 30+'px'}}
           />
           </div>
           <div className="mdb-advanced-search__overview">
           <div className="search-title">Overview</div>
           
           <Textarea
            onChange={this.onOverviewSearchChange.bind(this)}
           placeholder = 'Overview'
           rows = '6'
           txtareastyle = {{width: 250+'px'
            }}
           />
           </div>
           <div className="mdb-advanced-search__genres">
           <div className="mdb_search_genres__title">Genres</div>
           <div className="mdb_search_genres__list"><Genres
           onChange={this.handleGenreSearchChange.bind(this)}/></div>    
           </div>
           </div>
           
           <div className='mdb-column-right'>
           <div className="mdb-advanced-search__genres-adult">
           <div className="genre-adult__title">Adult</div>
           <div className="genre-adult__checkbox">
           <input type="checkbox" 
            onChange={this.handleAdultGenreSearchChange.bind(this)}
            name="Adult" 
            // value={this.remValue}
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
            onChange={this.handleRememberSearchChange.bind(this)}
            name="Remember" 
            
            id="SS"/>
           </div>                
                            
                
           </div>
           <div className="mdb-advanced-search__search_button">
           <Button
           className='mdb-advanced-btn'
            btnname='Search'
            btnclick={this.handleSubmitSearch.bind(this)}/>
           </div>

            </div>
            </div>
            </div>              )
                           
                
              
}
}

const mapStateToProps = (state) =>{
    let isAdvSearchOpened = state.search.isSearchOpen;
    let genresMovieSearch = state.search.genresMovieAdv;
    let adultMovieSearch = state.search.adultMovieAdv;
    let titleMovieSearch = state.search.titleMovieSAdv;
    let overviewMovieSearch = state.search.overviewMovieAdv;
    return{
        isAdvSearchOpened,
        genresMovieSearch,
        adultMovieSearch,
        titleMovieSearch,
        overviewMovieSearch
    };
};

const mapDispatchToProps = (dispatch) =>({
    // closeSearch: (event)=> {
    //     dispatch(closeSearch())
    //     event.preventDefault(),

        advancedMovieGenre:() => dispatch(advancedMovieGenre()),
        advancedMovieAdult:() => dispatch(advancedMovieAdult()),
        advancedMovieTitle:(name) => dispatch(advancedMovieTitle(name)),
        advancedMovieOverview:(overview) => dispatch(advancedMovieOverview(overview)),
        saveMovieSearchConfig:() => dispatch(saveMovieSearchConfig())

       
})

export const SuperSearch = connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);

