const API_KEY = "01366522cbd34c5a5f397723f03e0727";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}`,
};

export default requests;

export const requestYouTubeTrailerID = ({ id, media_type }, mediaType) => {
  return `/${mediaType === "all" ? media_type : mediaType}/${id}/videos?api_key=${API_KEY}`;
};
