import React from "react";
import { Trail } from "react-spring";

export default class extends React.Component {
  state = {
    titles: [
      { text: "R", key: 0 },
      { text: "E", key: 1 },
      { text: "A", key: 2 },
      { text: "C", key: 3 },
      { text: "T", key: 4 },
      { text: "-", key: 5 },
      { text: "S", key: 6 },
      { text: "P", key: 7 },
      { text: "R", key: 8 },
      { text: "I", key: 9 },
      { text: "N", key: 10 },
      { text: "G", key: 11 }
    ]
  };
  render() {
    return (
      <Trail
        items={this.state.titles}
        keys={item => item.key}
        from={{ transform: "translateY(-180px)", opacity: 0 }}
        to={{ transform: "translateY(0px)", opacity: 1 }}
        config={{ friction: 20, tension: 250 }}
      >
        {item => props => (
          <div id="title" style={props}>
            {item.text}
          </div>
        )}
      </Trail>
    );
  }
}
