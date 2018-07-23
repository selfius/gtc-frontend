import { ADD_PR_URL, CHANGE_URL } from './constants';

export function addPrUrl() {
  return {
    type: ADD_PR_URL,
  };
}

export function changeUrl(url) {
  return {
    type: CHANGE_URL,
    url,
  };
}
