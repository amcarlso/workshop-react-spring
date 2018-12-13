import React from "react";
import { Keyframes, Spring } from "react-spring";

const Container = Keyframes.Spring({
  show: [
    { opacity: 1, transform: "translateX(0px)" },
    { transform: "translateX(180px)" },
    { opacity: 0 },
    { transform: "translateX(-180px)" },
    { opacity: 1 },
    { transform: "translateX(0px)" }
  ],
  showAndHide: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }]
});

export default class extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Container state={"show"}>
          {styles => (
            <div id="keyframes-title" style={styles}>
              EXAMPLE
            </div>
          )}
        </Container>
      </div>
    );
  }
}
