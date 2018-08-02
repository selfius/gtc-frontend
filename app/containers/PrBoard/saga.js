import { BEGIN_ADD_PR_URL } from './constants';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectCurrentUrl } from './selectors';
import { succefullyAddedPrUrl } from './actions';

import request from 'utils/request';

export function* getPrData() {
  const username = 'selfius';
  const repo = 'gtc-frontend';
  const number = yield select(makeSelectCurrentUrl());

  const urlToFetchInfo = `https://api.github.com/repos/${username}/${repo}/pulls/${number}`;

  const urlToSubmitPRTp = `http://localhost:8080/pr/submit`;

  // we do make this call make this call mainly to validate the url
  try {
    yield call(request, urlToFetchInfo);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    // then we need to make a call to backend to add the whole thing
    yield call(request, urlToSubmitPRTp, {
      method: 'POST',
      body: JSON.stringify({
        number,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    yield put(succefullyAddedPrUrl());

    // we need to dispatch an action to refresh the respective store after that
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(BEGIN_ADD_PR_URL, getPrData);
}
