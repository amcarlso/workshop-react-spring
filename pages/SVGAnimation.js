import React from "react";
import { Spring } from "react-spring";
import Link from "next/link";
import Head from "next/head";

export default class extends React.Component {
  state = {
    timer: "",
    flip: true
  };
  componentDidMount() {
    var timer = setInterval(() => {
      this.setState({ flip: !this.state.flip });
    }, 5000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%"
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
          <Spring
            from={{ x: 100 }}
            to={{ x: this.state.flip ? 0 : 100 }}
            config={{ friction: 2, tension: 180 }}
          >
            {props => (
              <svg
                strokeDashoffset={props.x}
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  d="M0 0h24v24H0V0z"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="50"
                />
                <circle
                  cx="15.5"
                  cy="9.5"
                  r="1.5"
                  stroke="black"
                  strokeWidth=".5"
                  strokeDasharray="20"
                />
                <circle
                  cx="8.5"
                  cy="9.5"
                  r="1.5"
                  stroke="black"
                  strokeWidth=".5"
                  strokeDasharray="20"
                />
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"
                  stroke="black"
                  strokeWidth=".5"
                  strokeDasharray="25"
                />
              </svg>
            )}
          </Spring>
        </div>
        <div style={{ display: "flex" }}>
          <Spring
            from={{ x: 100 }}
            to={{ x: this.state.flip ? 0 : 100 }}
            config={{ friction: 90, tension: 180 }}
          >
            {props => (
              <svg
                strokeDashoffset={props.x}
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  strokeWidth="1"
                  strokeDasharray="50"
                  d="M0 0h24v24H0V0z"
                />
                {/* <path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" /> */}

                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  fill="none"
                  d="M7 2v11h3v9l7-12h-4l3-8z"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="10"
                />
              </svg>
            )}
          </Spring>
        </div>
        <div style={{ display: "flex" }}>
          <Spring
            from={{ x: 100 }}
            to={{ x: this.state.flip ? 0 : 100 }}
            config={{ friction: 180, tension: 180 }}
          >
            {props => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  fill="none"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="10"
                  strokeDashoffset={props.x}
                  d="M15 1H9v2h6V1zm4.03 6.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"
                />
              </svg>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}
