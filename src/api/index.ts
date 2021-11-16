import axios from "axios"

// interfaces
import { IMovie, IMovieDetails, IConfigImage, IGenre } from '../interfaces'

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_KEY
  }
})

export enum EndPoint {
  Upcoming = "/movie/upcoming",
  MovieDetails = "/movie",
  Configuration = "/configuration",
  Genres = "/genre/movie/list"
}

// movies upcoming
export const getMoviesUpcoming = async (): Promise<IMovie[] | null> => {
  return await api.get(EndPoint.Upcoming)
    .then((response) => response?.data?.results  || null)
    .catch((err) => null)
}

// movie details
export const getMovieDetails = async (movieID:string): Promise<IMovieDetails | null> => {
  return await api.get(EndPoint.MovieDetails+`/${movieID}`)
    .then((response) => response?.data || null)
    .catch((err) => null)
}

// configuration
export const getConfiguration = async (): Promise<IConfigImage | null> => {
  return await api
    .get(EndPoint.Configuration)
    .then((response) => response?.data?.images || null)
    .catch((err) => null)
}

// genres
export const getGenres = async (): Promise<IGenre[] | null> => {
  return await api
    .get(EndPoint.Genres)
    .then((response) => response?.data?.genres || null)
    .catch((err) => null)
}