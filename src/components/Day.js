import { isEqual } from 'lodash';
import React, {PropTypes} from 'react';

import Hour from './Hour';

import { ALL_DAY, HOURS } from '../constants/appConstants';

class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHours() {
    return HOURS.map((hour, i) => {
      return (
        <Hour
          key={i}
          bt={hour['bt']}
          et={hour['et']}
          day={this.props.days[this.props.day]}
          dayName={this.props.day}
          hourPress={this.props.hourPress}
          mouseDown={this.props.mouseDown}
          mouseUp={this.props.mouseUp}
          mouseHold={this.props.mouseHold} />
      );
    });
  }

  render() {
    const { day, days } = this.props;

    return (
      <div className="day-component">
        <div className={days[day].length != 0 ? 'day-name active' : 'day-name'}>{day}</div>
        <div
          className={isEqual(days[day], ALL_DAY) ? 'day-all-select active' : 'day-all-select'}
          onClick={() => this.props.selectAllDay(day)}></div>
        {this.renderHours()}
      </div>
    );
  }
}

Day.propTypes = {
  hourPress: PropTypes.func.isRequired,
  selectAllDay: PropTypes.func.isRequired,
  days: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
  mouseDown: PropTypes.func.isRequired,
  mouseUp: PropTypes.func.isRequired,
  mouseHold: PropTypes.bool.isRequired
};

export default Day;
