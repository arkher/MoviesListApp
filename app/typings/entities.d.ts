/* eslint-disable camelcase */
type Movie = {
  tittle: string
  year: number
  ids: {
    trakt: number
    slug: string
    imdb: string
    tmdb: number
  }
  imageUrl?: string
}

type FilmContent = {
  watchers: number
  movie: Movie
}

type MovieImage = {
  name: string
  tmdb_id: string
  imdb_id: string
  hdmovielogo: MovieInfo[]
  movieposter: MovieInfo[]
  moviedisc: MovieInfo[]
  moviebackground: MovieInfo[]
  moviethumb: MovieInfo[]
  moviebanner: MovieInfo[]
}

type MovieInfo = {
  id: string
  url: string
  lang: string
  likes: string
}
