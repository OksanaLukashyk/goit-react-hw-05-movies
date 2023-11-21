import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9b82d38bb9ccc6a083c91c5694927b6b';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrending = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/movie/day`);
  return data;
};

export const getMovies = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie?query=${query}`);
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}&append_to_response=videos,credits`
  );
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews`);
  return data;
};
