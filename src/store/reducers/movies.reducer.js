import {
  SET_MOVIES,
  SET_TREENDING_MOVIES,
  SET_SEASONS,
  SET_TREENDING_SEASONS,
  SET_GENRES_MOVIES,
  SET_GENRES_SEASONS,
  LOADING_SEARCH,
  SET_DISCOVERY_SEARCH,
  SET_LANGUAGE,
} from '../actions/action-types';

const initialState = {
  loadingSearch: false,
  discoverySearch: [],
  treendingMovies: [],
  movies: [],
  treendingSeasons: [],
  seasons: [],
  genresMovies: [],
  genresSeasons: [],
  deviceLanguage: 'pt-br',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_TREENDING_MOVIES:
      return {
        ...state,
        treendingMovies: action.payload,
      };
    case SET_SEASONS:
      return {
        ...state,
        seasons: action.payload,
      };
    case SET_TREENDING_SEASONS:
      return {
        ...state,
        treendingSeasons: action.payload,
      };
    case SET_GENRES_MOVIES:
      return {
        ...state,
        genresMovies: action.payload,
      };
    case SET_GENRES_SEASONS:
      return {
        ...state,
        genresSeasons: action.payload,
      };
    case LOADING_SEARCH:
      return {
        ...state,
        loadingSearch: action.payload,
      };
    case SET_DISCOVERY_SEARCH:
      return {
        ...state,
        discoverySearch: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        deviceLanguage: action.payload,
      };
    default:
      return state;
  }
};
