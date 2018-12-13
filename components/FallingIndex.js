import React from "react";
import { Trail } from "react-spring";
import Link from "next/link";

export default class extends React.Component {
  state = {
    titles: [
      { text: "E", key: 0 },
      { text: "X", key: 1 },
      { text: "A", key: 2 },
      { text: "M", key: 3 },
      { text: "P", key: 4 },
      { text: "L", key: 5 },
      { text: "E", key: 6 }
    ],
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {/* Return */}

        {/* ///////////////////// */}
        <div style={{ display: "flex" }}>
          <Trail
            items={this.state.titles}
            keys={item => {
              return item.key;
            }}
            from={{ transform: "translateX(90px)" }}
            to={{
              transform: this.state.flip
                ? "translateX(-90px)"
                : "translateX(90px)"
            }}
          >
            {item => props => (
              <div
                key={item.key}
                id="falling-title"
                style={{
                  transform: props.transform,
                  opacity: props.opacity
                }}
              >
                {item.text}
              </div>
            )}
          </Trail>
        </div>
      </div>
    );
  }
}
