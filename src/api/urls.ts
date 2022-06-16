const urls = {
  popularMovies: "/movie/popular",
  popularTvShows: "/tv/popular",
  movieDetails: (movieId: string | undefined) => `/movie/${movieId}`,
  showDetails: (showId: string | undefined) => `/tv/${showId}`,
  topRatedMovies: "/movie/top_rated",
  multiSearch: "/search/multi",
};

export { urls };
