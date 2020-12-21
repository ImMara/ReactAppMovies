import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";
import {Component} from "react";
import Loading from "./components/utils/Loading";
import data from "./data";
import * as axios from "axios";
import apiMovie from "./components/conf/api.movie";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies:null,
            selectedMovie:0,
            loaded:false
        }
        setTimeout( ()=>{
            this.setState(
                {
                    movies: data,
                    loaded:true
                })
        },1000)

    }

    updateSelectedMovie = (index)=>{
        this.setState({
            selectedMovie: index
        })
    }

    componentDidMount() {
       apiMovie.get('/discover/movie')
           .then(response => console.log(response))
           .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                { this.state.loaded ? (
                    <div className="d-flex flex-row flex-fill pt-4 p-2" >
                        <MovieList movies={ this.state.movies } updateSelectedMovie={ this.updateSelectedMovie }/>
                        <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        )
    }
}

export default App;
