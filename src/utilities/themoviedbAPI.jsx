import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9b82d38bb9ccc6a083c91c5694927b6b';
  
export const getTrending = async () => {
    const { data } = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
    return data;
};

export const getMovies = async (query, page) => {
    const { data } = await axios.get(`${BASE_URL}search/movie?query=${query}&page=${page}&api_key=${API_KEY}`);
    return data;
};

export const getMovieDetails = async (id) => {
    const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
    return data;
};

export const getMovieCredits = async (id) => {
    const { data } = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
    return data;
};

export const getMovieReviews = async (id) => {
    const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
    return data;
};

export const getMoviePosters = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/images`);
  return data;
};