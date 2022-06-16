import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../pages/Movies";
import Home from "../pages/Home";
import TVShows from "../pages/TVShows";
import Error404 from "../pages/Error404";
import { routes } from "./routes";
import MovieDetails from "../components/MovieDetails";
import ShowDetails from "../components/ShowDetails";

const Router = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.MOVIES} element={<Movies />} />
      <Route path={routes.MOVIE} element={<MovieDetails />} />
      <Route path={routes.SHOWS} element={<TVShows />} />
      <Route path={routes.SHOW} element={<ShowDetails />} />
      <Route path={routes.ALL} element={<Error404 />} />
    </Routes>
  );
};

export default Router;
