import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API,
    language: "en",
  },
});

export { instance };
