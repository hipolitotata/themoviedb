import {
  GET_TREENDING,
  GET_GENRES,
  SET_SEASONS,
  SET_MOVIES,
  SET_TREENDING_MOVIES,
  SET_TREENDING_SEASONS,
  SET_GENRES_MOVIES,
  SET_GENRES_SEASONS,
  GET_DISCOVER,
  LOADING_SEARCH,
  GET_DISCOVERY_SEARCH,
  SET_DISCOVERY_SEARCH,
  SET_LANGUAGE,
} from './action-types';

export const setSeasons = (payload) => ({
  type: SET_SEASONS,
  payload,
});

export const setDeviceLanguage = (payload) => ({
  type: SET_LANGUAGE,
  payload,
});

export const findDiscovery = (payload) => ({
  type: GET_DISCOVERY_SEARCH,
  payload,
});

export const setSearchDiscovery = (payload) => ({
  type: SET_DISCOVERY_SEARCH,
  payload,
});

export const setLoadingSearch = (payload) => ({
  type: LOADING_SEARCH,
  payload,
});

export const getDiscover = (payload) => ({
  type: GET_DISCOVER,
  payload,
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload,
});

export const setTreendingMovies = (payload) => ({
  type: SET_TREENDING_MOVIES,
  payload,
});

export const setTreendingSeasons = (payload) => ({
  type: SET_TREENDING_SEASONS,
  payload,
});

export const getTreending = (payload) => ({
  type: GET_TREENDING,
  payload,
});

export const getGenres = (payload) => ({
  type: GET_GENRES,
  payload,
});

export const setGenresMovie = (payload) => ({
  type: SET_GENRES_MOVIES,
  payload,
});

export const setGenresSeasons = (payload) => ({
  type: SET_GENRES_SEASONS,
  payload,
});
