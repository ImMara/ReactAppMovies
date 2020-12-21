import * as axios from "axios";

const apiMovie = axios.create ({
        baseURL: "https://api.themoviedb.org/4"
    })

apiMovie.interceptors.request.use(req =>{
    req.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmE5NmY1Zjk5YjgyNzliYzA2MWJlOTcyYzQ0MzkyYSIsInN1YiI6IjVmZTBhM2IwMGU0NDE5MDAzZGVjZGE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJSxe4EjI0bYWyTuIK9moGqTmt1IRxJPqiZFsVlx5jY"
    return req
})

export default apiMovie


export const apiMovieMap  =  (element) =>({
        img:"https://image.tmdb.org/t/p/w500"+element.poster_path,
        title:element.title,
        details:`${element.release_date} | ${ element.vote_average }/10 ( ${element.vote_count} )`,
        description:element.overview
})