import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Form from 'components/Form';
import Input from 'components/Input';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrBoard, {
  makeSelectCurrentUrl,
  makeSelectPRs,
} from './selectors';

import { addPrUrl, changeUrl } from './actions';
import reducer from './reducer';
import saga from './saga';

export class PrBoard extends React.PureComponent {
  render() {
    return (
      <Form onSubmit={this.props.onSubmitForm}>
        Enter PR URL:
        <Input
          id="pr.url"
          type="text"
          value={this.props.url}
          onChange={this.props.onChange}
        />
        {this.props.prs.map(pr => <div key={pr}>{pr}</div>)}
      </Form>
    );
  }
}

PrBoard.propTypes = {
  url: PropTypes.string,
  onChange: PropTypes.func,
  onSubmitForm: PropTypes.func,
  prs: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  prboard: makeSelectPrBoard(),
  url: makeSelectCurrentUrl(),
  prs: makeSelectPRs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChange: evt => dispatch(changeUrl(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addPrUrl());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'prboard', reducer });
const withSaga = injectSaga({ key: 'prboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PrBoard);
