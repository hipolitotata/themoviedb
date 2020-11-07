import {call, put, all, select} from 'redux-saga/effects';
import {
  setTreendingSeasons,
  setTreendingMovies,
  setGenresMovie,
  setGenresSeasons,
  setMovies,
  setSeasons,
  setLoadingSearch,
  setSearchDiscovery,
  findDiscovery as findDiscoveryAC,
} from '../actions/movies.actions';

import api, {api_key} from '../../services/api';

export function* getTreending({payload}) {
  const {moviesReducer} = yield select();

  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${moviesReducer.deviceLanguage}&sort_by=popularity.desc&page=200&timezone=America%2FNew_York&include_null_first_air_dates=false`,
      );
    const {data} = yield call(request);

    if (payload.type_movie === 'movie') {
      yield all([put(setTreendingMovies(data.results))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setTreendingSeasons(data.results))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE');
  }
}

export function* getGenres({payload}) {
  const {moviesReducer} = yield select();

  try {
    const request = () =>
      api.get(
        `/genre/${payload.type_movie}/list?api_key=${api_key}&language=${moviesReducer.deviceLanguage}`,
      );
    const {data} = yield call(request);

    if (payload.type_movie === 'movie') {
      yield all([put(setGenresMovie(data.genres))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setGenresSeasons(data.genres))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE', error);
  }
}

export function* getDiscover({payload}) {
  const {moviesReducer} = yield select();

  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${moviesReducer.deviceLanguage}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
      );
    const {data} = yield call(request);

    if (payload.type_movie === 'movie') {
      yield all([put(setMovies(data.results))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setSeasons(data.results))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE', error);
  }
}

export function* findDiscovery({payload}) {
  const {moviesReducer} = yield select();

  yield put(setLoadingSearch(true));
  yield put(setSearchDiscovery([]));

  if (payload.search === '') return yield put(setLoadingSearch(false));

  try {
    const seasonsRequest = () =>
      api.get(
        `/search/tv?query=${payload.search}&api_key=${api_key}&language=${moviesReducer.deviceLanguage}&page=1&include_adult=false`,
      );

    const moviesRequest = () =>
      api.get(
        `/search/movie?query=${payload.search}&api_key=${api_key}&language=${moviesReducer.deviceLanguage}&page=1&include_adult=false`,
      );

    const [seasons, movies] = yield all([
      call(seasonsRequest),
      call(moviesRequest),
    ]);

    const data = [...movies.data.results, ...seasons.data.results];

    yield put(setSearchDiscovery(data));
  } catch (error) {
    yield put(findDiscoveryAC({search: payload.search}));
    console.log('ERROR RESPONSE', error);
  } finally {
    yield put(setLoadingSearch(false));
  }
}
