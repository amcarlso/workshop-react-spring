import React from "react";
import { Transition } from "react-spring";
import Link from "next/link";

export default class extends React.Component {
  state = {
    items: [
      {
        key: 1,
        name: "Fido",
        text: "dog",
        pic:
          "https://www.rd.com/wp-content/uploads/2018/03/kentucky-760x506.jpg"
      },
      {
        key: 2,
        name: "Scrappy",
        text: "penguin",
        pic:
          "https://previews.123rf.com/images/milante/milante1703/milante170300055/74990361-big-nose-in-the-unfriendly-dog-face-vicious-expression-.jpg"
      },
      {
        key: 3,
        name: "Bert",
        text:
          "Consult not your fears but your hopes and your dreams.  Think not about your frustrations,  but about your unfulfilled potential.  Concern yourself not with what you tried and failed in, but with what it is still possible for you to do. ",
        pic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCjlN5l-VvMMhhNxg5vKfMJmsw_7yIWaE_ae-RtEGaiSxAWgn"
      }
    ],
    flip: false,
    key: 4,
    singleItem: [{ key: 1, text: "something" }],
    red: true
  };

  handleDelete(i) {
    const tempItems = [...this.state.items];
    tempItems.splice(i, 1);
    this.setState({ items: [...tempItems] });
  }

  handleInput = e => this.setState({ input: e.target.value });
  handlePost = () => {
    const tempItems = [...this.state.items];
    tempItems.unshift({
      text: this.state.input,
      key: this.state.key,
      name: "You",
      pic:
        "https://image.shutterstock.com/image-photo/closeup-portrait-photo-adorable-mongrel-260nw-773293051.jpg"
    });
    this.setState({ items: [...tempItems], key: ++this.state.key });
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <div style={{ position: "fixed", top: 0, left: 0 }}>
          <Link href="/">
            <button>Go Back</button>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Transition
            from={{ transform: "translate3d(0.5%,-100%,0)", opacity: 0 }}
            enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
            leave={{ transform: "translate3d(100%,0%,0)", opacity: 0 }}
          >
            {(item, phase, i) => props => {
              return (
                <div
                  style={{
                    transform: props.transform,
                    opacity: props.opacity,
                    height: "50px",
                    width: "50px",
                    backgroundColor: "lime"
                  }}
                >
                  Dog
                </div>
              );
            }}
          </Transition>
          <Transition
            from={{ transform: "translate3d(0.5%,-100%,0)", opacity: 0 }}
            enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
            leave={{ transform: "translate3d(100%,0%,0)", opacity: 0 }}
          >
            {(item, phase, i) => props => {
              return (
                <div
                  style={{
                    transform: props.transform,
                    opacity: props.opacity,
                    height: "250px",
                    width: "250px",
                    backgroundColor: "blue"
                  }}
                >
                  Dog
                </div>
              );
            }}
          </Transition>
        </div>
        <Transition
          item={this.state.red}
          from={{ transform: "translate3d(0.5%,-100%,1%)", opacity: 0 }}
          enter={{ transform: "translate3d(0%,0%,0%)", opacity: 1 }}
          leave={{ transform: "translate3d(100%,0%,100%)", opacity: 0 }}
        >
          {(item, phase, i) => props => {
            return (
              <div
                style={{
                  transform: props.transform,
                  opacity: props.opacity,
                  height: "500px",
                  width: "800px",
                  backgroundColor: "red"
                }}
                onClick={() => this.handleDelete(i)}
              >
                Dog
              </div>
            );
          }}
        </Transition>
      </div>
    );
  }
}
