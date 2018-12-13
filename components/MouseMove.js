import React from "react";
import { Trail, animated } from "react-spring";
import Link from "next/link";

const items = new Array(6).fill(0).map((_, i) => i);
export default class Demo extends React.Component {
  state = { coords: [0, 0] };
  handleMouseMove = ({ pageX, pageY }) =>
    this.setState({ coords: [pageX, pageY] });
  transform = (x, y) => `translate3d(${x - 50}px, ${y - 50}px, 0)`;
  componentDidMount = () =>
    window.addEventListener("mousemove", this.handleMouseMove);

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.handleMouseMove);
  };
  render() {
    return (
      <div>
        <div style={{ position: "fixed", top: 0, left: 0 }}>
          <Link href="/">
            <button>Go Back</button>
          </Link>
        </div>
        <Trail native items={items} to={this.state}>
          {(item, i) => props => (
            <Link href="/">
              <animated.div
                style={{
                  zIndex: items.length - i,
                  transform: props.coords.interpolate(this.transform),
                  borderRadius: "100px",
                  height: "100px",
                  width: "100px",
                  backgroundColor: "pink",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            </Link>
          )}
        </Trail>
      </div>
    );
  }
}
