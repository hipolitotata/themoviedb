import {all, takeEvery, take} from 'redux-saga/effects';
import {GET_TREENDING, GET_GENRES, GET_DISCOVER} from '../actions/action-types';

import {getGenres, getTreending, getDiscover} from './movies';

export default function* rootSaga() {
  yield all([
    takeEvery(GET_TREENDING, getTreending),
    takeEvery(GET_GENRES, getGenres),
    takeEvery(GET_DISCOVER, getDiscover),
  ]);
}
