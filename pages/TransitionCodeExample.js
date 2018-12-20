import React from "react";
import { Spring, Transition } from "react-spring";
import Link from "next/link";

export default class extends React.Component {
  state = {
    items: [
      {
        key: 1
      },
      {
        key: 2
      },
      {
        key: 3
      }
    ],
    key: 4,
    modal: false
  };

  handleDelete = i => {
    let tempItems = [...this.state.items];
    tempItems.shift();
    this.setState({ items: [...tempItems] });
  };

  handleAdd = () => {
    let tempItems = [...this.state.items];
    let tempObj = { key: this.state.key };
    tempItems.push(tempObj);
    let tempKey = ++this.state.key;
    this.setState({ items: tempItems, key: tempKey });
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ position: "fixed", top: 0, left: 0 }}>
          <Link href="/">
            <button>Go Back</button>
          </Link>
        </div>
        <button style={{ position: "fixed", left: 0 }} onClick={this.handleAdd}>
          Add
        </button>
        <button
          style={{ position: "fixed", left: 40 }}
          onClick={this.handleDelete}
        >
          Delete
        </button>
        <button
          style={{ position: "fixed", left: 100 }}
          onClick={this.handleModal}
        >
          Show Code
        </button>
        <Spring
          from={{ opacity: 0 }}
          to={{
            opacity: this.state.modal ? 1 : 0
          }}
        >
          {mot => {
            return (
              <div
                style={{
                  position: "fixed",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  zIndex: 6,
                  opacity: mot.opacity
                }}
                onClick={this.state.modal ? () => this.handleModal() : null}
              >
                <img src="/static/ReactTransition-Simple.PNG" />
              </div>
            );
          }}
        </Spring>
        <Transition
          items={this.state.items}
          keys={item => item.key}
          from={{ transform: "translate3d(0.5%,-100%,0)", opacity: 0 }}
          enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          leave={{ transform: "translate3d(0%,100%,0)", opacity: 0 }}
        >
          {(item, phase, i) => props => {
            return (
              <div
                style={{ transform: props.transform, opacity: props.opacity }}
              >
                <div
                  style={{
                    height: "100vh",
                    width: "30px",
                    backgroundColor: item.key % 2 === 0 ? "blue" : "red"
                  }}
                />
              </div>
            );
          }}
        </Transition>
      </div>
    );
  }
}
