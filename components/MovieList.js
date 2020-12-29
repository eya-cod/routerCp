import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({Movies, TitleFilter, RateFilter}) => {
    return (
        <div>
        {Movies.filter((Movie)=>Movie.title.toLowerCase().includes(TitleFilter.toLowerCase().trim()) && Movie.rate>=RateFilter ) 
        .map((Movie,i) => <MovieCard Movie={Movie} key={i} />) }   
        </div>
    )
}

export default MovieList
