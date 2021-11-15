import { useState, useEffect } from 'react'

// api
import { getConfiguration, getMoviesUpcoming } from '../../api'

// interfaces
import { IConfigImage, IMovie } from '../../interfaces'

// styles
import { Card, CardList, HomeWrapper } from './styles'

/**
 * Home page to show a movies list with card style
 * 
 * unfortunately when import react-router-dom the tests broken.
 * Even creating the context of the browserRouter in jest...
 * Then, in this moment instead use '<Link>' or 'useNavigate' to 
 * navigate, it was necessary use javascript 'window.location.replace'
 * 
 * an in-depth research will be needed to discover the things.
 */
export function Home() {
  const [movies, setMovies] = useState<IMovie[]>()
  const [cfg, setCfg] = useState<IConfigImage>()  

  /**
   * Runs once only (when mount)
   * movies and configuration(images info) 
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
   
  return (
    <HomeWrapper>
      { // When movies is empty, only for test
        movies?.length === 0 && <p>Loading ...</p> 
      }
      
      <CardList>
        { movies && movies.map( movie => (
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
