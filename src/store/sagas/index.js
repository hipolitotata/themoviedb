import {all, takeEvery, take} from 'redux-saga/effects';
import {GET_MOVIES} from '../actions/action-types';

import {getMovies} from './movies';

export default function* rootSaga() {
  yield all([takeEvery(GET_MOVIES, getMovies)]);
}
