/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_BALANCE } from 'containers/App/constants';
import { loadBalanceSuccess } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectCurrentUser } from 'containers/App/selectors';

/**
 * Github repos request/response handler
 */
export function* getBalance() {
  // Select username from store
  const username = yield select(makeSelectCurrentUser());
  const requestURL = `http://localhost:8080/gtc/${username}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(loadBalanceSuccess(data.balance));
  } catch (err) {
    console.log('shit happens');
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_BALANCE, getBalance);
}
