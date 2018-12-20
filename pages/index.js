import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "./../components/Nav";
import FallingTitle from "./../components/FallingTitle";
import SpringIndex from "./../components/SpringIndex";
import FallingIndex from "./../components/FallingIndex";
import MrSmiles from "./../components/MrSmiles";
// import ParallaxSpring from "./../components/ParallaxSpring";

export default class extends React.Component {
  render() {
    return (
      <div
        className="main-font"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Head>
          <title>React-Spring Workshop</title>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <Nav />
        <div
          style={{
            width: "600px",
            backgroundColor: "#DDD",
            boxShadow: ".5px .5px .5px #333",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              margin: "50px"
            }}
          >
            <FallingTitle />
          </div>
          <h2>Spring Examples</h2>
          <SpringIndex />
          <Link href="/SpringExample">
            <a>Spring Example</a>
          </Link>
          <h2>Trailing Examples</h2>
          <FallingIndex />
          <Link href="/Mouse">
            <a>MouseMove</a>
          </Link>
          <Link href="/FallingLetters">
            <a>FallingLetters</a>
          </Link>
          <h2>SVG Animation</h2>
          <MrSmiles timer="2500" />
          <Link href="/SVGAnimation">
            <a>SVG Animation</a>
          </Link>
          <h2>Transition Examples</h2>
          <Link href="/TransitionExample">
            <a>Transition Example</a>
          </Link>
          <Link href="/TransitionCodeExample">
            <a>Transition Code Example</a>
          </Link>
          {/* <h2>KeyFrames Examples</h2>
          <Link href="/KeyFrames">
            <a>KeyFrames Example</a>
          </Link>
          <h2>Parallax Examples</h2>
          <Link href="/ParallaxExample">
            <a>Parallax Example</a>
          </Link> */}
        </div>
      </div>
    );
  }
}
