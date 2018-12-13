import React from "react";
import { Keyframes, Spring } from "react-spring";

const Container = Keyframes.Spring({
  show: { opacity: 1 },
  showAndHide: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }]
});

export default class extends React.Component {
  state = {
    hovering: false
  };
  render() {
    return (
      <Container state={"showAndHide"}>
        {styles => <div style={styles}>Hello</div>}
      </Container>
    );
  }
}
