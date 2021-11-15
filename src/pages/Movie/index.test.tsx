import React from 'react';
import { render, screen } from '@testing-library/react'

// component
import { Movie } from './index'

// Fake data for testing
import movieFake from '../../utils/fakedata/imdb_movie.json'
import configurationFake from '../../utils/fakedata/imdb_configuration.json'

/** useLayoutEffect - https://reactjs.org/docs/hooks-reference.html
 * The signature is identical to useEffect, but it fires synchronously after all DOM mutations. 
 * Use this to read layout from the DOM and synchronously re-render. 
 * Updates scheduled inside useLayoutEffect will be flushed synchronously, 
 * before the browser has a chance to paint.
 * 
 */
beforeAll(() => jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect))

describe('Movie Component', () => {
  test(`should be able to set and show a movie title in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([movieFake, {} ])
    .mockReturnValueOnce([configurationFake, {} ])

    render(<Movie />)

    const title = screen.getByText(movieFake.title);
    expect(title).toBeInTheDocument();
  })

  test(`should be able to set and show a movie tagline in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([movieFake, {} ])
    .mockReturnValueOnce([configurationFake, {} ])

    render(<Movie />)

    const title = screen.getByText(movieFake.tagline);
    expect(title).toBeInTheDocument();
  })

  test(`should be able to set and show a movie runtime in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([movieFake, {} ])
    .mockReturnValueOnce([configurationFake, {} ])

    render(<Movie />)

    const title = screen.getByText("runtime: "+movieFake.runtime+" min");
    expect(title).toBeInTheDocument();
  })

  test(`should be able to set and show a movie votes average in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([movieFake, {} ])
    .mockReturnValueOnce([configurationFake, {} ])

    render(<Movie />)

    const title = screen.getByText("votes average: "+movieFake.vote_average);
    expect(title).toBeInTheDocument();
  })

  test(`should be able to set and show a movie votes count in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([movieFake, {} ])
    .mockReturnValueOnce([configurationFake, {} ])

    render(<Movie />)

    const title = screen.getByText("votes count: "+movieFake.vote_count);
    expect(title).toBeInTheDocument();
  })

  test(`should be able to set and show a movie release date in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([movieFake, {} ])
    .mockReturnValueOnce([configurationFake, {} ])

    render(<Movie />)

    const title = screen.getByText("release date: "+movieFake.release_date);
    expect(title).toBeInTheDocument();
  })
})
