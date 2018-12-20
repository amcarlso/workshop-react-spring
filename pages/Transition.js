import React from "react";
import { Transition, animated, config } from "react-spring";

export default class extends React.Component {
  state = {
    todoList: [
      { text: "T", key: 0 },
      { text: "I", key: 1 },
      { text: "M", key: 2 },
      { text: "O", key: 3 },
      { text: "T", key: 4 },
      { text: "H", key: 5 },
      { text: "Y", key: 6 }
    ]
  };

  handleDelete(i) {
    this.state.todoList.splice(i, 1);
    this.setState({ todoList: this.state.todoList });
  }

  render() {
    return (
      <Transition
        items={this.state.todoList}
        keys={item => item.key}
        from={{ transform: "translate3d(-40px,-40px,0)" }}
        enter={{ transform: "translate3d(0,0px,0)" }}
        leave={{ transform: "translate3d(-40px,-40px,0)" }}
      >
        {(item, action, i) => props => (
          <div style={props} onClick={() => this.handleDelete(i)}>
            {item.text}
          </div>
        )}
      </Transition>
    );
  }
}
