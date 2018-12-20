import React from "react";
import { Transition } from "react-spring";

export default class extends React.Component {
  state = {
    items: [{ key: 1 }, { key: 2 }, { key: 3 }]
  };
  render() {
    return (
      <div>
        <Transition
          items={this.state.items}
          keys={item => item.key}
          from={{ transform: "translate3d(0.5%,-100%,0)", opacity: 0 }}
          enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          leave={{ transform: "translate3d(0%,100%,0)", opacity: 0 }}
        >
          {(item, phase, i) => props => {
            return <div style={props}>{item.key}</div>;
          }}
        </Transition>
      </div>
    );
  }
}
