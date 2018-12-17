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
    singleItem: [{ key: 1, text: "something" }]
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
        <div
          style={{
            width: "100%",
            height: "200px",
            boxShadow: "1px 1px 1px #333",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <div style={{ position: "fixed", top: 0, left: 0 }}>
            <Link href="/">
              <button>Go Back</button>
            </Link>
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50px",
              backgroundImage:
                "url(https://image.shutterstock.com/image-photo/closeup-portrait-photo-adorable-mongrel-260nw-773293051.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <input
            onChange={this.handleInput}
            style={{ width: "600px", height: "100px" }}
          />
          <button
            onClick={this.handlePost}
            style={{ width: "600px", height: "100px" }}
          >
            Post
          </button>
        </div>
        <Transition
          items={this.state.items}
          keys={item => item.key}
          from={{ transform: "translate3d(0.5%,-100%,0)", opacity: 0 }}
          enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          leave={{ transform: "translate3d(100%,0%,0)", opacity: 0 }}
        >
          {(item, phase, i) => props => {
            return (
              <div
                style={{ transform: props.transform, opacity: props.opacity }}
              >
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                    boxShadow: "1px 1px 1px #333",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      minWidth: "600px",
                      height: "200px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50px",
                        backgroundImage: `url(${item.pic})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                    <h2 style={{ color: "#333" }}>{item.name} Says: </h2>
                    <h3 style={{ width: "500px", color: "#444" }}>
                      "{item.text}"
                    </h3>
                  </div>
                  <button onClick={() => this.handleDelete(i)}>Delete</button>
                </div>
              </div>
            );
          }}
        </Transition>
      </div>
    );
  }
}
