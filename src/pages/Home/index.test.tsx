import React from 'react';
import { render, screen } from '@testing-library/react'

// component
import { Home } from './index'

// Fake data for testing
import moviesFake from '../../utils/fakedata/imdb_movies.json'
import configurationFake from '../../utils/fakedata/imdb_configuration.json'
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

describe('Home Component', () => {
  test(`should be able to set and show a movie in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([moviesFake, [] ])
    .mockReturnValueOnce([configurationFake, {} ])
    .mockReturnValueOnce([-1, -1 ])
    .mockReturnValueOnce([genresFake, [] ])

    render(<Home />)

    const title = screen.getByTestId("movie_card");
    expect(title).toBeInTheDocument();
  })

  test(`should be able to show all movies in screen`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([moviesFake, [] ])
    .mockReturnValueOnce([configurationFake, {} ])
    .mockReturnValueOnce([-1, -1 ])
    .mockReturnValueOnce([genresFake, [] ])

    render(<Home />)

    const sumMoviesDisplayed = screen.getAllByTestId("movie_card");
    expect(sumMoviesDisplayed).toHaveLength(1);

  })

  test(`should be able to show loading message when movies is empty`, async () => {
    React.useState = jest.fn()
    .mockReturnValueOnce([[], [] ])
    .mockReturnValueOnce([{}, {} ])
    .mockReturnValueOnce([-1, -1 ])
    .mockReturnValueOnce([genresFake, [] ])

    render(<Home />)

    const loading = screen.getByText("Loading ...");
    expect(loading).toBeInTheDocument();
  })
})