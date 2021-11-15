import { useState, useEffect } from "react"
import { IConfigImage, IMovie } from '../../interfaces'
import { getConfiguration, getMoviesUpcoming } from '../../api'

/**
 * Home page to show a movies list with card style
 */
export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([] as IMovie[])
  const [cfg, setCfg] = useState<IConfigImage>({} as IConfigImage)

  /**
   * Runs only when mount to fetch
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
    <div>
      { // When movies is empty, only for test
        movies.length === 0 && <p>Loading ...</p> 
      }
      
      { movies && movies.map( movie => {
        return (
          <img 
            key={movie.id} 
            src={mountPosterURL(movie)} 
            alt={movie.title} 
          />
        )
      })}      
    </div>
  )
}
