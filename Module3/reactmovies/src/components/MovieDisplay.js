const MovieDisplay = (props) => {
    const {movie} = props;
    console.log(movie)
    return(
        <div>
            <h1>Display Movie</h1>
            {/*Title*/}
            <h3>{movie.Title}</h3>
            {/*Genre*/}
            <h3>{movie.Genre}</h3>
            {/*Poster image*/}
            <img src={movie.Poster}/>
            {/*Year*/}
            <h4>{movie.Year}</h4>
            
        </div>
    )
}

export default MovieDisplay;