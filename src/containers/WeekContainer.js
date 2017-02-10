import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actionCreators';
import Week from '../components/Week';

export const WeekContainer = (props) => {
  return (
    <Week
      selectAllDay={props.actions.selectAllDay}
      hourPress={props.actions.hourPress}
      clearWeek={props.actions.clearWeek}
      days={props.days}
    />
  );
};

WeekContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  days: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    days: state.days
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekContainer);
