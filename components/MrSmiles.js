import React from "react";
import { Spring } from "react-spring";

export default class extends React.Component {
  state = {
    flip: true
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ flip: !this.state.flip });
    }, this.props.timer);
  }

  render() {
    return (
      <Spring
        from={{ x: 100 }}
        to={{ x: this.state.flip ? 0 : 100 }}
        config={{ friction: 50, tension: 120 }}
      >
        {props => (
          <svg
            strokeDashoffset={props.x}
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
          >
            <path
              //   fill="none"
              d="M0 0h24v24H0V0z"
              stroke="red"
              stroke-width="1"
              stroke-dasharray="50"
            />
            <circle
              cx="15.5"
              cy="9.5"
              r="1.5"
              stroke="red"
              stroke-width=".5"
              stroke-dasharray="20"
            />
            <circle
              cx="8.5"
              cy="9.5"
              r="1.5"
              stroke="red"
              stroke-width=".5"
              stroke-dasharray="20"
            />
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"
              stroke="red"
              stroke-width=".5"
              stroke-dasharray="25"
            />
          </svg>
        )}
      </Spring>
    );
  }
}
