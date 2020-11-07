import {call, put, all} from 'redux-saga/effects';
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

const language = 'pt-br';

export function* getTreending({payload}) {
  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${language}&sort_by=popularity.desc&page=200&timezone=America%2FNew_York&include_null_first_air_dates=false`,
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
  try {
    const request = () =>
      api.get(
        `/genre/${payload.type_movie}/list?api_key=${api_key}&language=${language}`,
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
  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
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
  yield put(setLoadingSearch(true));
  yield put(setSearchDiscovery([]));

  if (payload.search === '') return yield put(setLoadingSearch(false));

  try {
    const seasonsRequest = () =>
      api.get(
        `/search/tv?query=${payload.search}&api_key=${api_key}&language=${language}&page=1&include_adult=false`,
      );

    const moviesRequest = () =>
      api.get(
        `/search/movie?query=${payload.search}&api_key=${api_key}&language=${language}&page=1&include_adult=false`,
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
