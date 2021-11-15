import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

// api
import { getMovieDetails, getConfiguration } from "../../api"

// interfaces
import { IMovieDetails, IConfigImage } from "../../interfaces"

/**
 * Component to show a movie details
 * 
 * @params id, received by react-router-dom
 */
export function Movie() {
  const [ movie, setMovie ] = useState<IMovieDetails>({} as IMovieDetails)
  const [ cfg, setCfg ] = useState<IConfigImage>({} as IConfigImage)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      if (typeof id === 'string') {
        const movieDetails = await getMovieDetails(id)
        const configuration = await getConfiguration()

        if (movieDetails) setMovie(movieDetails)
        if (configuration) setCfg(configuration)
      }
    })()
  }, [id])

  /**
   * Mount url of movie backdrop
   * base_url + backdrop_size + backdrop_path
   * 
   * @returns string
   */
  const mountBackdropURL = (): string => {
    return (
      cfg.base_url + "" +
      cfg.backdrop_sizes?.[3] + "" +
      movie.backdrop_path
    )
  }

  return (
    <div>
      <div>
        <h4>{movie.title}</h4>
        <p>{movie.tagline}</p>
      </div>

      <p>runtime: {movie.runtime} min</p>
      <p>votes average: {movie.vote_average}</p>
      <p>votes count: {movie.vote_count}</p>
      <p>release date: {movie.release_date}</p>

      <hr/>

      <p>{movie.overview}</p>
      <img src={mountBackdropURL()} alt={movie.title}/>
    </div>
  )
}