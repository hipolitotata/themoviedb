import {all, takeEvery, take} from 'redux-saga/effects';
import {
  GET_TREENDING,
  GET_GENRES,
  GET_DISCOVER,
  GET_DISCOVERY_SEARCH,
} from '../actions/action-types';

import {getGenres, getTreending, getDiscover, findDiscovery} from './movies';

export default function* rootSaga() {
  yield all([
    takeEvery(GET_TREENDING, getTreending),
    takeEvery(GET_GENRES, getGenres),
    takeEvery(GET_DISCOVER, getDiscover),
    takeEvery(GET_DISCOVERY_SEARCH, findDiscovery),
  ]);
}
