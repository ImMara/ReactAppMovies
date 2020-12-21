import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";
import {Component} from "react";
import Loading from "./components/utils/Loading";
import apiMovie from "./conf/api.movie";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies:null,
            selectedMovie:0,
            loaded:false
        }
    }

    componentDidMount() {
       apiMovie.get('/discover/movie')
           .then(response => response.data.results)
           .then( moviesApi => {
               const movies = moviesApi.map( element => ({
                   img:"https://image.tmdb.org/t/p/w500"+element.poster_path,
                   title:element.title,
                   details:`${element.realease_date} | ${ element.vote_average }/10 ( ${element.vote_count} )`,
                   description:element.overview
               }))
               this.updateMovies(movies)
           } )
           .catch(error => console.log(error))
    }

    updateMovies = (movies) => {
        this.setState({
            movies,
            loaded: true
        })
    }

    updateSelectedMovie = (index)=>{
        this.setState({
            selectedMovie: index
        })
    }

    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <SearchBar updateMovies={ this.updateMovies }/>
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
