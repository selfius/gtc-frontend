/*
 *
 * PrBoard reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_URL, BEGIN_ADD_PR_URL, END_ADD_PR_URL } from './constants';

export const initialState = fromJS({
  urls: [],
  currentUrl: '',
});

function prBoardReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_URL:
      return state.set('currentUrl', action.url);
    case END_ADD_PR_URL:
      return state.set('currentUrl', '');
    default:
      return state;
  }
}

export default prBoardReducer;
