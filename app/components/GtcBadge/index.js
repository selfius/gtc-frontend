import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeBalanceSelection } from './selectors';
import { compose } from 'redux';

export class GtcBadge extends React.PureComponent {
  render() {
    return (
      <div>
        <pre>You have {this.props.balance} GTC</pre>
      </div>
    );
  }
}

GtcBadge.propTypes = {
  balance: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  balance: makeBalanceSelection(),
});

export default compose(
  connect(
    mapStateToProps,
    undefined,
  ),
)(GtcBadge);
