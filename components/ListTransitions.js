import React from "react";
import { Transition, animated, config } from "react-spring";

export default class extends React.Component {
  state = {
    todoList: [
      { text: "Hello", key: 0 },
      { text: "Hello", key: 1 },
      { text: "Dog", key: 2 },
      { text: "Helo", key: 3 },
      { text: "llo", key: 4 },
      { text: "Hllo", key: 5 },
      { text: "He", key: 6 }
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
        from={{ transform: "translate3d(0,-40px,0)" }}
        enter={{ transform: "translate3d(0,0px,0)" }}
        leave={{ transform: "translate3d(0,-40px,0)" }}
        update={{ opacity: 0.5 }}
      >
        {(item, action, index) => props => (
          <div
            style={{
              opacity: props.opacity,
              height: props.height,
              transform: props.transform
            }}
            onClick={() => this.handleDelete(index)}
          >
            {item.text}
          </div>
        )}
      </Transition>
    );
  }
}
