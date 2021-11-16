import { useState, useEffect, useRef } from "react"
import { useParams } from 'react-router-dom'

// api
import { getMovieDetails, getConfiguration } from "../../api"

// interfaces
import { IMovieDetails, IConfigImage } from "../../interfaces"

// styles
import { 
  Detail, 
  MovieDetail, 
  MovieDetailWrapper, 
  MenuBar, 
  Loading 
} from "./styles"

// icons 
import Icon from '@mdi/react'
import { 
  mdiAlarm,  
  mdiStarOutline, 
  mdiAccountStarOutline, 
  mdiCalendarOutline,
  mdiArrowLeftCircle,
  mdiHomeCircle
} from '@mdi/js'

/**
 * Component to show a movie details
 * 
 * @params id, received by react-router-dom
 */
export function Movie() {
  const [ movie, setMovie ] = useState<IMovieDetails>({} as IMovieDetails)
  const [ cfg, setCfg ] = useState<IConfigImage>({} as IConfigImage)
  const isLoading = useRef(true)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      if (typeof id === 'string') {
        const movieDetails = await getMovieDetails(id)
        const configuration = await getConfiguration()

        if (movieDetails) {
          setMovie(movieDetails)
          isLoading.current = false
        }
        
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
      cfg.backdrop_sizes?.[1] + "" +
      movie.backdrop_path
    )
  }

  return (
    <MovieDetailWrapper>
      <MenuBar>
        <div onClick={() => window.history.go(-1)} >
        <Icon path={mdiArrowLeftCircle} size={1.5} />
        </div>

        <div onClick={() => window.location.replace("/")} >
        <Icon path={mdiHomeCircle} size={1.5} />
        </div>
      </MenuBar>

      { isLoading.current === true && (
        <Loading>Loading ...</Loading>
      )}

      { isLoading.current === false && (
        <>
          <MovieDetail bgURL={mountBackdropURL()} />

          <Detail>
            <div className="spacer" />

            <div className="header">
              <h4>{movie.title}</h4>
              <p>{movie.tagline}</p>
            </div>

            <span className="info">

              <span className="default" data-tooltip="Runtime">
                <Icon path={mdiAlarm} size={0.8} />
                {movie.runtime} min
              </span>

              <span className="default" data-tooltip="Votes average">
                <Icon path={mdiStarOutline} size={0.85} />
                {movie.vote_average}
              </span>

              <span className="default" data-tooltip="Votes count">
                <Icon path={mdiAccountStarOutline} size={0.85} />
                {movie.vote_count}
              </span>

              <span className="default" data-tooltip="Release date">
                <Icon path={mdiCalendarOutline} size={0.85} />
                {movie.release_date}
              </span>
            </span>

            <div className="body">
              <p>{movie.overview}</p>
            </div>

          </Detail>
        </>
      )}
    </MovieDetailWrapper>
  )
}