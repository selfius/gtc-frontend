import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPrBoardDomain = state => state.get('prboard', initialState);

const makeSelectPrBoard = () =>
  createSelector(selectPrBoardDomain, substate => substate.toJS());

export const makeSelectCurrentUrl = () =>
  createSelector(selectPrBoardDomain, state => state.get('currentUrl'));

export const makeSelectPRs = () =>
  createSelector(selectPrBoardDomain, state => state.get('urls'));

export default makeSelectPrBoard;
export { selectPrBoardDomain };
