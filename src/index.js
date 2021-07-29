import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import ReviewPage from "./pages/reviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvPage from './pages/tvListPage';
import CastMemberInfoPage from './pages/castMemberInfo';
import TrendingPage from './pages/trendingPage';
import TvDetailsPage from './pages/tvDetailsPage';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <TvShowsContextProvider>
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/tv" component={TvPage} />
          <Route exact path="/trending" component={TrendingPage} />
          <Route exact path="/person/credits/:id" component = {CastMemberInfoPage} />
          <Route
            exact
            path="/movies/favorites"
            component={FavoriteMoviesPage}
          />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/tv/:id" component={TvDetailsPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/reviews/:id" component={ReviewPage} />
          <Redirect from="*" to="/" />
        </Switch>
        </TvShowsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
