import React from 'react';
import { render, screen } from '@testing-library/react'

// component
import { GenresSelect } from './index'

// interfaces
import { IMovie } from '../../interfaces'

// Fake data for testing
import moviesFake from '../../utils/fakedata/imdb_movies.json'
import genresFake from '../../utils/fakedata/imdb_genres.json'

/** useLayoutEffect - https://reactjs.org/docs/hooks-reference.html
 * The signature is identical to useEffect, but it fires synchronously after all DOM mutations. 
 * Use this to read layout from the DOM and synchronously re-render. 
 * Updates scheduled inside useLayoutEffect will be flushed synchronously, 
 * before the browser has a chance to paint.
 */
beforeAll(() => {
  jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
})

interface Props {
  movies: IMovie[];
  setGenreSelected: React.Dispatch<React.SetStateAction<number>>;
  genreSelected: number;
}

describe('GenresSelect Component', () => {
  test(`should be able to mount a component`, async () => {
    const props: Props = {
      movies: moviesFake,
      setGenreSelected: {} as React.Dispatch<React.SetStateAction<number>>,
      genreSelected: -1
    }

    render(<GenresSelect {...props} />)

    expect(screen.getByText("All Genres")).toBeInTheDocument();
  })

  test(`should be able to show All Genres option`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([genresFake, [] ])

    const props: Props = {
      movies: moviesFake,
      setGenreSelected: {} as React.Dispatch<React.SetStateAction<number>>,
      genreSelected: -1
    }

    render(<GenresSelect {...props} />)

    expect(screen.getByText("All Genres")).toBeInTheDocument();
  })

  test(`should be able to show Science Fiction option`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([genresFake, [] ])

    const props: Props = {
      movies: moviesFake,
      setGenreSelected: {} as React.Dispatch<React.SetStateAction<number>>,
      genreSelected: -1
    }

    render(<GenresSelect {...props} />)

    expect(screen.getByText("Science Fiction")).toBeInTheDocument();
  })

  test(`should be able to show Action option`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([genresFake, [] ])

    const props: Props = {
      movies: moviesFake,
      setGenreSelected: {} as React.Dispatch<React.SetStateAction<number>>,
      genreSelected: -1
    }

    render(<GenresSelect {...props} />)

    expect(screen.getByText("Action")).toBeInTheDocument();
  })

  test(`should be able to show Adventure option`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([genresFake, [] ])

    const props: Props = {
      movies: moviesFake,
      setGenreSelected: {} as React.Dispatch<React.SetStateAction<number>>,
      genreSelected: -1
    }

    render(<GenresSelect {...props} />)

    expect(screen.getByText("Adventure")).toBeInTheDocument();
  })
})