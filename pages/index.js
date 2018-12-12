import React from "react";
import Head from "next/head";
import MrSmiles from "./../components/MrSmiles";
import FallingTitle from "./../components/FallingTitle";
import ListTransitions from "./../components/ListTransitions";

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
          <div style={{ display: "flex" }}>
            <ListTransitions />
          </div>
        </div>
      </div>
    );
  }
}
