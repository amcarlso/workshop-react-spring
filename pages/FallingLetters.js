import React from "react";
import { Trail } from "react-spring";
import Head from "next/head";
import Link from "next/link";

export default class extends React.Component {
  state = {
    titles: [
      { text: "R", key: 0 },
      { text: "E", key: 1 },
      { text: "A", key: 2 },
      { text: "C", key: 3 },
      { text: "T", key: 4 },
      { text: "-", key: 5 },
      { text: "S", key: 6 },
      { text: "P", key: 7 },
      { text: "R", key: 8 },
      { text: "I", key: 9 },
      { text: "N", key: 10 },
      { text: "G", key: 11 }
    ]
  };
  render() {
    return (
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        {/* Return */}
        <div style={{ position: "fixed", top: 0, left: 0 }}>
          <Link href="/">
            <button>Go Back</button>
          </Link>
        </div>
        {/* ///////////////////// */}
        <div style={{ display: "flex" }}>
          <Trail
            items={this.state.titles}
            keys={item => {
              return item.key;
            }}
            from={{ transform: "translateY(180px)", opacity: 0 }}
            to={{ transform: "translateY(0px)", opacity: 0.5 }}
            config={{ friction: 10, tension: 100 }}
          >
            {item => props => (
              <div
                key={item.key}
                className="falling-letters"
                id="title"
                style={{
                  transform: props.transform,
                  opacity: props.opacity
                }}
              >
                {item.text}
              </div>
            )}
          </Trail>
        </div>
        <div style={{ display: "flex" }}>
          <Trail
            items={this.state.titles}
            keys={item => {
              return item.key;
            }}
            from={{ transform: "translateY(-180px)", opacity: 0 }}
            to={{ transform: "translateY(-40px)", opacity: 0.5 }}
            config={{ friction: 10, tension: 100 }}
          >
            {item => props => (
              <div
                key={item.key}
                className="falling-letters"
                id="title"
                style={{
                  transform: props.transform,
                  opacity: props.opacity
                }}
              >
                {item.text}
              </div>
            )}
          </Trail>
        </div>
      </div>
    );
  }
}
