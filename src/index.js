import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import MovieListPage from "./pages/movieListPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MustWatchPage from "./pages/mustWatchPage";
import ReviewPage from "./pages/reviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddReviewPage from './pages/addReviewPage';
import TvPage from './pages/tvListPage';
import CastMemberInfoPage from './pages/castMemberInfo';
import TrendingPage from './pages/trendingPage';
import TvDetailsPage from './pages/tvDetailsPage';
import HomePage from './pages/homePage';
import CreateSessionPage from './pages/createSessionPage';
import LogoutPage from './pages/logoutPage';
import AdvancedFilterPage from './pages/advancedFilterPage';
import PrivateRoute from './components/privateRoute';

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
          <PrivateRoute component={AddReviewPage} exact path="/reviews/:content/form" />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/tv" component={TvPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/movie/filter" component={AdvancedFilterPage} />
          <Route exact path="/tv/filter" component={TvPage} />
          <Route exact path="/movies" component={MovieListPage} />
          <Route exact path="/trending" component={TrendingPage} />
          <Route exact path="/success" component={CreateSessionPage} />
          <Route exact path="/person/credits/:id" component = {CastMemberInfoPage} />
          <PrivateRoute component={FavoriteMoviesPage} exact path="/movies/favorites" />
          <PrivateRoute component={MustWatchPage} exact path="/mustwatch" />
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
