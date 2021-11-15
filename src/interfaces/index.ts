export interface IMovie {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface IMovieDetails {
  adult?: boolean;
  backdrop_path?: string; 
  budget?: number;
  genres?: IGenre[];
  id?: number;
  imdb_id?: string;
  overview?: string;
  popularity?: number;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  status?: string;
  tagline?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface IGenre {
  id?: number;
  name?: string;
}

export interface IConfigImage {
  base_url?: string;
  secure_base_url?: string;
  backdrop_sizes?: string[];
  logo_sizes?: string[];
  poster_sizes?: string[];
}