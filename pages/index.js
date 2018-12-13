import React from "react";
import Head from "next/head";
import MrSmiles from "./../components/MrSmiles";
import FallingTitle from "./../components/FallingTitle";
import ListTransitions from "./../components/ListTransitions";
import Link from "next/link";
import KeyingFrames from "./../components/KeyingFrames";
// import ParallaxSpring from "./../components/ParallaxSpring";
import SpringExample from "./SpringExample";
import SpringIndex from "./../components/SpringIndex";

export default class extends React.Component {
  render() {
    return (
      <div
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
        {/* Slide OUt menu  */}
        {/* <div style={{ position: "fixed", top: 0, left: 0, zIndex: 3 }}>
          Fixed Position
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            height: "100vh",
            backgroundColor: "green"
          }}
        >
          Menu
        </div> */}
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <MrSmiles timer="2000" />
            <MrSmiles timer="2500" />
            <MrSmiles timer="1000" />
            <MrSmiles timer="1500" />
            <MrSmiles timer="3000" />
          </div>
          {/* <div style={{ display: "flex" }}>
            <Link prefetch href="/Transition">
              <a>Transitions</a>
            </Link>
          </div> */}
          <h2>Spring Examples</h2>
          <SpringIndex />
          <Link href="/SpringExample">
            <a>Spring Example</a>
          </Link>
          <h2>KeyFrames Examples</h2>
          <div style={{ display: "flex" }}>
            <KeyingFrames />
          </div>
          {/* <ParallaxSpring /> */}
          <h2>Trailing Examples</h2>
          Example of Trailing
          <Link href="/Mouse">
            <a>MouseMove</a>
          </Link>
          <Link href="/FallingLetters">
            <a>FallingLetters</a>
          </Link>
          <h2>Parallax Examples</h2>
        </div>
      </div>
    );
  }
}
