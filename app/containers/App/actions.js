import {
  LOAD_BALANCE,
  LOAD_BALANCE_SUCCESS,
  CHANGE_USERNAME,
} from './constants';

export function loadBalance() {
  return { type: LOAD_BALANCE };
}

export function loadBalanceSuccess(balance) {
  return {
    type: LOAD_BALANCE_SUCCESS,
    balance,
  };
}

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    username: name,
  };
}
