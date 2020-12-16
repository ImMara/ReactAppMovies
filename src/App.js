import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";


function App() {
  return (
    <div className="App">
        <div className={"App d-flex flex-column"}>
            <Header />
            <div className={"d-flex flex-row flex-fill pt-5 p-2"}>
                <MovieList />
                <MovieDetails />
            </div>
        </div>
    </div>
  );
}

export default App;
