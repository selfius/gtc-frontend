import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';

import Input from './Input';
import Form from './Form';
import { loadBalance, changeUsername } from '../../containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from '../../containers/App/selectors';
import saga from './saga';


/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.onSubmitForm}>
          Login:
          <Input
            id="username"
            type="text"
            value={this.props.username}
            onChange={this.props.onChangeUsername}
          />
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadBalance());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectCurrentUser(),
});

const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withSaga,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login);
