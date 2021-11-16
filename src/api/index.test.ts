// api
import { 
  getMoviesUpcoming, 
  getConfiguration, 
  getMovieDetails, 
  api, 
  EndPoint, 
  getGenres
} from './index'

describe('API module', () => {
  test('should not be able to consume endpoint if api_key is invalid or not exist', async () => {
    const response = await api
      .get(EndPoint.Configuration, { params: { api_key: 'youshallnotpass'}})
      .then((response) => response?.data?.images || null)
      .catch((err) => null)

    expect(response).toBeNull()
  })

  test('should be able consume /configuration and obtain object expected', async () => {
    const response = await getConfiguration()
    expect(response).toHaveProperty('base_url')
  })

  test('should be able consume /movie/upcoming and obtain object expected', async () => {
    const response = await getMoviesUpcoming()
    expect(response?.length).toBeGreaterThanOrEqual(1)
  })

  test('should be able consume /movie and obtain object expected', async () => {
    const movies = await getMoviesUpcoming()
    const response = await getMovieDetails(`${movies?.[0].id}` || '-1')

    expect(response).toHaveProperty('id')
  })

  test('should be able to get a poster of a movie', async () => {
    const cfg = await getConfiguration()
    const movies = await getMoviesUpcoming()
    const movie = await getMovieDetails(`${movies?.[0].id}` || '-1')

    const response = await api.get(`${cfg?.base_url}/${cfg?.backdrop_sizes?.[3]}/${movie?.backdrop_path}`)
    expect(response).toHaveProperty("status", 200)
  })

  test('should be able consume /genre/movie/list and obtain object expected', async () => {
    const response = await getGenres()
    expect(response?.length).toBeGreaterThanOrEqual(1)
  })
})