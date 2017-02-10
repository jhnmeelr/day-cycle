import React, {PropTypes} from 'react';

import Day from './Day';

import { DAYS } from '../constants/appConstants';

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseHold: false
    };
  }

  mouseDown = () => {
    this.setState({ mouseHold: true });
  }

  mouseUp = () => {
    this.setState({ mouseHold: false });
  }

  renderDays() {
    return DAYS.map((day, i) => {
      return (
        <Day
          key={i}
          day={DAYS[i]}
          days={this.props.days}
          selectAllDay={this.props.selectAllDay}
          hourPress={this.props.hourPress}
          mouseDown={this.mouseDown}
          mouseUp={this.mouseUp}
          mouseHold={this.state.mouseHold} />
      );
    });
  }

  render() {
    return (
      <div className="week-component">
        <div className="info-wrap">
          <div className="all-day">All Day</div>
          <div className="hour">00:00</div>
          <div className="hour">03:00</div>
          <div className="hour">06:00</div>
          <div className="hour">09:00</div>
          <div className="hour">12:00</div>
          <div className="hour">15:00</div>
          <div className="hour">18:00</div>
          <div className="hour">21:00</div>
        </div>
        <div className="days-wrap">
          {this.renderDays()}
        </div>
        <div className="buttons-wrap">
          <div className="button">Save Changes</div>
          <div className="button" onClick={() => this.props.clearWeek()}>Clear</div>
        </div>
      </div>
    );
  }
}

Week.propTypes = {
  hourPress: PropTypes.func.isRequired,
  selectAllDay: PropTypes.func.isRequired,
  clearWeek: PropTypes.func.isRequired,
  days: PropTypes.object.isRequired
};

export default Week;
