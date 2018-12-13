import React from "react";
import { Trail, Spring } from "react-spring";

export default class extends React.Component {
  state = {
    titles: [
      { text: "REACT-SPRING", key: 0 },
      {
        text:
          "React-Spring is an animation library specifically designed for React.  The goal is to create more fluid animations when dealing with the Virtual DOM without needing to deal with all of the physics based calculations.",
        key: 2
      },
      { text: "Links", key: 1, link: true }
    ],
    flip: true
  };

  handleMenu = () => {
    this.setState({ flip: !this.state.flip });
  };

  render() {
    return (
      <div
        style={{
          zIndex: 9,
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "600px"
        }}
      >
        <Spring
          from={{ transform: "translateX(600px)", x: 50, y: 0 }}
          to={{
            transform: this.state.flip
              ? "translateX(560px)"
              : "translateX(0px)",
            x: this.state.flip ? 50 : 0,
            y: this.state.flip ? 0 : 50
          }}
          config={{ friction: 26, tension: 250 }}
        >
          {props => {
            return (
              <div
                style={{
                  transform: props.transform,
                  display: "flex",
                  height: "100vh",
                  width: "600px",
                  boxShadow: "-2px 1px 1px #333",
                  backgroundColor: "#777",
                  color: "#DDD",
                  textShadow: "1px 1px 2px #333"
                }}
              >
                <div
                  onClick={this.handleMenu}
                  style={{
                    height: 0,
                    width: 0,
                    borderRight: `${props.x}px solid #333`,
                    borderBottom: "25px solid transparent",
                    borderTop: "25px solid transparent",
                    borderLeft: `${props.y}px solid #333`
                  }}
                />
                <div
                  // id="nav-trails"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <Trail
                    items={this.state.titles}
                    keys={item => item.key}
                    from={{
                      transform: "translateX(600px)",
                      opacity: 0
                    }}
                    to={{
                      transform: this.state.flip
                        ? "translateX(500px)"
                        : "translateX(0px)",
                      opacity: 1
                    }}
                    config={{ friction: 30, tension: 250 }}
                  >
                    {item => props => (
                      <div id="title" style={props} id="nav-trails">
                        {item.text}
                        {item.link ? (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "left"
                            }}
                          >
                            <a href="http://react-spring.surge.sh/"> * Docs</a>
                            <a href="https://blog.usejournal.com/why-react-needed-yet-another-animation-library-introducing-react-spring-8212e424c5ce">
                              * Why React Spring over React Motion or Animations
                              Library for React
                            </a>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Trail>
                </div>
              </div>
            );
          }}
        </Spring>
      </div>
    );
  }
}
