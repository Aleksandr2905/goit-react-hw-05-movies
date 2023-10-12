import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'de598b8a73d0faf19e596baca4221ad4';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    language: 'en-US',
    api_key: API_KEY,
  },
});

export const fetchRequestTrending = async () => {
  const { data } = await instance.get(`trending/all/day`);
  return data;
};

export const fetchRequestSearch = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: query,
      include_adult: false,
      page: 1,
    },
  });
  return data;
};

export const fetchRequestMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const fetchRequestCast = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};

export const fetchRequestReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`, {
    params: {
      page: 1,
    },
  });
  console.log(data);
  return data;
};
