import { useState, useEffect } from 'react'

// api
import { getGenres } from '../../api'

// styles
import { Select } from './styles'

// interfaces
import { IGenre, IMovie } from '../../interfaces'

interface Props {
  movies: IMovie[];
  setGenreSelected: React.Dispatch<React.SetStateAction<number>>;
  genreSelected: number;
}

/**
 * Component to show a genres select
 */
export function GenresSelect(props: Props) {
  const [genres, setGenres] = useState<IGenre[]>([] as IGenre[])
  
  useEffect(() => {
    (async () => {
      const allGenres = await getGenres()
      if (allGenres) setGenres(allGenres)
    })()
  }, [])

  /* Obtain movies in hooks and get uniques genres 
  *  1. loop to get all genres (with duplicates)
  *  2. flat all arrays to spreed in one sigleton
  *  3. remove duplicates 
  */
  const uniquesGenres = (): number[] => {
    return props.movies
    .map(movie => movie.genre_ids || [])
    .flat()
    .filter((x, i, self) => x && self.indexOf(x) === i)
  }
  
  // Filter a genre by id
  const genreByID = (genreID:number): IGenre => {
    return genres?.filter( x => x.id === genreID)[0] || {} as IGenre
  }

  return (
    <Select value={props.genreSelected} onChange={(e) => props.setGenreSelected(Number(e.target.value))}>
      <option key={-1} value={-1}>All Genres</option>
      
      {props.movies && genres && 
        uniquesGenres().map(e => {
          return <option key={e} value={e}>{genreByID(e).name}</option>
        })
      }
    </Select>
  )
}

