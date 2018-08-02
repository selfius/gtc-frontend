import { BEGIN_ADD_PR_URL, CHANGE_URL, END_ADD_PR_URL } from './constants';

export function addPrUrl() {
  return {
    type: BEGIN_ADD_PR_URL,
  };
}

export function succefullyAddedPrUrl() {
  return {
    type: END_ADD_PR_URL,
  };
}

export function changeUrl(url) {
  return {
    type: CHANGE_URL,
    url,
  };
}
