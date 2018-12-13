import React from "react";
import { Spring } from "react-spring";

export default class extends React.Component {
  state = {
    flip: true,
    timer: ""
  };

  componentDidMount() {
    var timer = setInterval(() => {
      this.setState({ flip: !this.state.flip });
    }, 3000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: this.state.flip ? 1 : 0 }}>
        {props => {
          return <div style={props}>EXAMPLE</div>;
        }}
      </Spring>
    );
  }
}
