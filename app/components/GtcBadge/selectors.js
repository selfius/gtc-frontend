import { createSelector } from 'reselect';
import { selectGlobal } from '../../containers/App/selectors';

const makeBalanceSelection = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'balance'], 0),
  );

export { makeBalanceSelection };
