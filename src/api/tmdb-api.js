export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getSimilarMovies = async (args) => {
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieCast = async (args) => {
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getPersonDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=2a300a0c508fbced667dcab1a12a860c&language=en-US&page=1`
  );
  return response.json();
};

export const getPersonCredits = async (id) => {
  console.log(id);
}

export const getTvShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const filteredMoviesSearch = async (
  release_year,
  average_rating_greater_than,
  average_rating_less_than,
  duration_less_than,
  duration_greater_than,
  original_language,
  sort_category
) => {
  let initialRequestString = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`;

  if (release_year) {
    initialRequestString += `&year=${release_year}`;
  }
  if (average_rating_greater_than) {
    initialRequestString += `&vote_average.gte=${average_rating_greater_than}`;
  }
  if (average_rating_less_than) {
    initialRequestString += `&vote_average.lte=${average_rating_less_than}`;
  }
  if (duration_greater_than) {
    initialRequestString += `&with_runtime.gte=${duration_greater_than}`;
  }
  if (duration_less_than) {
    initialRequestString += `&with_runtime.lte=${duration_less_than}`;
  }
  if (original_language) {
    initialRequestString += `&with_original_language=${original_language}`;
  }
  if (sort_category) {
    initialRequestString += `&sort_by=${sort_category}`;
  }

  const response = await fetch(initialRequestString);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovie = async (args) => {
  // console.log(args)
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpComingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
