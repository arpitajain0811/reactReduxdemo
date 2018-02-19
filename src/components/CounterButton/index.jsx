import React from 'react';
import { connect } from 'react-redux';

const CounterButton = props => (
  <button onClick={props.counter}>
    Increment
  </button>
);

const mapDispatchToProps = dispatch => ({
  counter: () => {
    dispatch({
      type: 'INCREMENT',
    });
  },
});
export default connect(null, mapDispatchToProps)(CounterButton);
