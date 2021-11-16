import { useState, useEffect } from 'react'

// api
import { getConfiguration, getMoviesUpcoming } from '../../api'

// components
import { GenresSelect } from '../../components/GenresSelect'

// interfaces
import { IConfigImage, IMovie } from '../../interfaces'

// styles
import { Card, CardList, HomeWrapper, MenuBar } from './styles'

/**
 * Home page to show a movies list with card style
 * 
 * unfortunately when import react-router-dom the tests broken.
 * Even creating the context of the BrowserRouter in jest...
 * Then, in this moment instead use '<Link>' or 'useNavigate' 
 * it was necessary use pure javascript 'window.location.replace'
 * 
 * an in-depth research will be needed to discover the things.
 */
export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([] as IMovie[])
  const [cfg, setCfg] = useState<IConfigImage>()  
  const [genreSelected, setGenreSelected] = useState<number>(-1)

  /**
   * Get main data on mount
   * movies and configuration(images conf. info.)
   */
   useEffect(() => {
    (async () => {
      const configuration = await getConfiguration()
      const moviesUpcoming = await getMoviesUpcoming()

      if (configuration) setCfg(configuration)
      if (moviesUpcoming) setMovies(moviesUpcoming)
    })()
  }, [])

  /**
   * Mount url of movie poster
   * base_url + poster_size + poster_path
   * 
   * @params movie:IMovie
   * @returns string
   */
  const mountPosterURL = (movie:IMovie) => {
    return `${cfg?.base_url}${cfg?.poster_sizes?.[2]}${movie?.poster_path}`
  }
   
  // until the movies are not obtained, 
  // force this early return
  if (movies?.length === 0) {
    return (
      <HomeWrapper>
        <p>Loading ...</p>
      </HomeWrapper>
    )
  }

  //when movies are obtained, 
  // we go
  return (
    <HomeWrapper>
      <MenuBar>
        <GenresSelect 
          movies={movies} 
          setGenreSelected={setGenreSelected} 
          genreSelected={genreSelected} 
        />
      </MenuBar>
      
      <CardList>
        { movies && movies
          .filter(movie => (genreSelected !== -1) ? movie.genre_ids?.find(x => x === genreSelected) : true) // by genre
          .map( movie => (
          <Card 
            data-testid="movie_card"
            key={movie.id} 
            bgURL={mountPosterURL(movie)} 
            onClick={() => window.location.replace('/'+movie.id)}
          >
            <span className="rating">{movie?.vote_average}</span>
          </Card>
        ))}      
      </CardList>
    </HomeWrapper>
  )
}
