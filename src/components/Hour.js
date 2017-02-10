import React, {PropTypes} from 'react';

class Hour extends React.Component {
  handleMouseDown(bt, et, dayName) {
    this.props.hourPress(bt, et, dayName);
    this.props.mouseDown();
  }

  handleMouseUp() {
    this.props.mouseUp();
  }

  handleMouseEnter(bt, et, dayName) {
    if (this.props.mouseHold) {
      this.props.hourPress(bt, et, dayName);
    }
  }

  render() {
    const { bt, et, day, dayName } = this.props;
    return (
      <div
        className="hour-component"
        onMouseDown={() => this.handleMouseDown(bt, et, dayName)}
        onMouseUp={() => this.handleMouseUp()}
        onMouseEnter={() => this.handleMouseEnter(bt, et, dayName)}>
        {day.map((interval, i) => {
          if (interval.bt <= et && interval.et >= bt) { return (<div key={i} className="active"></div>); }
        })}
      </div>
    );
  }
}

Hour.propTypes = {
  hourPress: PropTypes.func.isRequired,
  bt: PropTypes.number.isRequired,
  et: PropTypes.number.isRequired,
  day: PropTypes.array.isRequired,
  dayName: PropTypes.string.isRequired,
  mouseDown: PropTypes.func.isRequired,
  mouseUp: PropTypes.func.isRequired,
  mouseHold: PropTypes.bool.isRequired
};

export default Hour;
