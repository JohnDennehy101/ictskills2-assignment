import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
import AddReviewPage from "./pages/addReviewPage";
import TvPage from "./pages/tvListPage";
import CastMemberInfoPage from "./pages/castMemberInfo";
import TrendingPage from "./pages/trendingPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import HomePage from "./pages/homePage";
import CreateSessionPage from "./pages/createSessionPage";
import LogoutPage from "./pages/logoutPage";
import AdvancedFilterPage from "./pages/advancedFilterPage";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import UserReviewedContent from "./pages/userReviewedContent";

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
              <PrivateRoute
                component={AddReviewPage}
                exact
                path="/reviews/:content/form"
              />
              <PublicRoute
                component={UpcomingMoviesPage}
                exact
                path="/movies/upcoming"
              />
              <PublicRoute component={TvPage} exact path="/tv" />
              <PublicRoute component={LogoutPage} exact path="/logout" />
              <PublicRoute
                component={AdvancedFilterPage}
                exact
                path="/movie/filter"
              />
              <PublicRoute
                component={AdvancedFilterPage}
                exact
                path="/tv/filter"
              />
              <PublicRoute component={MovieListPage} exact path="/movies" />
              <PublicRoute component={TrendingPage} exact path="/trending" />
              <Route
                component={CreateSessionPage}
                exact
                path="/success"
              />
              <PublicRoute
                component={CastMemberInfoPage}
                exact
                path="/person/credits/:id"
              />
              <PrivateRoute
                component={FavoriteMoviesPage}
                exact
                path="/movies/favorites"
              />
              <PrivateRoute component={MustWatchPage} exact path="/mustwatch" />
              <PrivateRoute
                component={UserReviewedContent}
                exact
                path="/content/reviewed"
              />

              <PublicRoute component={MoviePage} path="/movies/:id" />
              <PublicRoute component={TvDetailsPage} path="/tv/:id" />
              <Route exact path="/" component={HomePage} />
              <PublicRoute component={ReviewPage} path="/reviews/:id" />
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
