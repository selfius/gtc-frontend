import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  LOAD_BALANCE,
  LOAD_BALANCE_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: '',
  userData: {
    balance: 0,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BALANCE:
      return state.setIn(['userData', 'balance'], false).set('loading', true);
    case LOAD_BALANCE_SUCCESS:
      return state
        .setIn(['userData', 'balance'], action.balance)
        .set('loading', false);
    case CHANGE_USERNAME:
      return state.set('currentUser', action.username);
    default:
      return state;
  }
}

export default appReducer;
