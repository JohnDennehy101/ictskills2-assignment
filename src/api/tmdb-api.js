export const getMovies = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
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

export const getSimilarTvShows = async (args) => {
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
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

export const getTvCast = async (args) => {
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getPersonDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  );
  return response.json();
};

export const getPersonCredits = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTrendingItems = async (media_type, time) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${media_type}/${time}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTvShows = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
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
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTvShow = async (args) => {
  // console.log(args)
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
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

export const getTvShowImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
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

export const getTvReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results);
      return json.results;
    });
};

export const getUpComingMovies = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getUpComingTvShows = async (page) => {
  //export this into utils file
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  let date = formatDate(new Date());
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}&first_air_date.gte=${date}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const createRequestToken = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const askUserForAuthentication = async (sessionId) => {
  window.location.href = `https://www.themoviedb.org/authenticate/${sessionId}?redirect_to=http://localhost:3000/success`;
};

export const createUserSession = async () => {
  let deniedAuthentication = window.location.href.includes("denied=true");
  let requestToken = window.location.href.substring(
    Number(window.location.href.indexOf("=")) + 1,
    Number(window.location.href.indexOf("&"))
  );

  if (deniedAuthentication) {
    window.location.href = "/";
  } else {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ request_token: `${requestToken}` }),
      }
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }
};

export const createGuestSession = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getUserAccount = async (sessionId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  let jsonResponse = await response.json();
  if (!localStorage.getItem("accountId")) {
    localStorage.setItem("accountId", jsonResponse.id);
  }
  return jsonResponse;
};

//NOT WORKING CORRECTLY ON API Side
export const deleteUserSession = async (sessionId) => {
  console.log(sessionId);
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/session/?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ session_id: `${sessionId}` }),
    }
  );

  console.log(response);

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const markAsFavourite = async (mediaType, id, favourite) => {
  let sessionId = localStorage.getItem("session");
  let accountId = localStorage.getItem("accountId");
  const response = await fetch(
    `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        media_type: `${mediaType}`,
        media_id: id,
        favorite: favourite,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getFavourites = async (mediaType, page) => {
  let contentType = mediaType === "movie" ? "movies" : "tv";
  let sessionId = localStorage.getItem("session");
  let accountDetails = await getUserAccount(sessionId);
  let accountId = accountDetails.id;

  console.log(accountId);

  const response = await fetch(
    `https://api.themoviedb.org/3/account/${accountId}/favorite/${contentType}?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse.results;
};

export const markAsMustWatch = async (mediaType, id, watchlist) => {
  let sessionId = localStorage.getItem("session");
  let accountId = localStorage.getItem("accountId");

  console.log(mediaType);
  console.log(id);
  console.log(watchlist);
  const response = await fetch(
    `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        media_type: `${mediaType}`,
        media_id: id,
        watchlist: watchlist,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMustWatchItems = async (mediaType, page) => {
  let contentType = mediaType === "movie" ? "movies" : "tv";
  let sessionId = localStorage.getItem("session");
  let accountDetails = await getUserAccount(sessionId);
  let accountId = accountDetails.id;

  console.log(accountId);

  const response = await fetch(
    `https://api.themoviedb.org/3/account/${accountId}/watchlist/${contentType}?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse.results;
};
