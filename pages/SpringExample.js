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
      <div id="spring-container">
        <Head>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>

        {/* Return */}
        <div id="go-back">
          <Link href="/">
            <button>Go Back</button>
          </Link>
        </div>
        {/* ///////////////////// */}
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: this.state.flip ? 1 : 0 }}
          config={{ tension: 150, friction: 75 }}
        >
          {props => (
            <div id="spring-title" style={props}>
              WELCOME TO SPRING
            </div>
          )}
        </Spring>
        <Spring
          from={{ number: 0 }}
          to={{ number: this.state.flip ? 1 : 0 }}
          config={{ tension: 150, friction: 75 }}
        >
          {props => {
            return (
              <div id="spring-number">{Math.floor(props.number * 100)}%</div>
            );
          }}
        </Spring>
        <div style={{ display: "flex" }}>
          <Spring
            from={{ x: 100 }}
            to={{ x: this.state.flip ? 0 : 100 }}
            config={{ friction: 70, tension: 120 }}
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
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="50"
                />
                <circle
                  cx="15.5"
                  cy="9.5"
                  r="1.5"
                  stroke="white"
                  strokeWidth=".5"
                  strokeDasharray="20"
                />
                <circle
                  cx="8.5"
                  cy="9.5"
                  r="1.5"
                  stroke="white"
                  strokeWidth=".5"
                  strokeDasharray="20"
                />
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"
                  stroke="white"
                  strokeWidth=".5"
                  strokeDasharray="25"
                />
              </svg>
            )}
          </Spring>
          <Spring
            from={{ x: 100 }}
            to={{ x: this.state.flip ? 0 : 100 }}
            config={{ friction: 110, tension: 120 }}
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
                  //   fill="none"
                  d="M0 0h24v24H0V0z"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="50"
                />
                <circle
                  cx="15.5"
                  cy="9.5"
                  r="1.5"
                  stroke="white"
                  strokeWidth=".5"
                  strokeDasharray="20"
                />
                <circle
                  cx="8.5"
                  cy="9.5"
                  r="1.5"
                  stroke="white"
                  strokeWidth=".5"
                  strokeDasharray="20"
                />
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"
                  stroke="white"
                  strokeWidth=".5"
                  strokeDasharray="25"
                />
              </svg>
            )}
          </Spring>

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
        <Spring
          from={{ x: 100, y: 0 }}
          to={{
            x: this.state.flip ? 100 : 0,
            y: this.state.flip ? 0 : 100
          }}
          config={{ friction: 6, tension: 11 }}
        >
          {props => {
            return (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.x}px solid transparent`,
                    borderRight: `${props.x}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.x}px solid transparent`,
                    borderRight: `${props.y}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.y}px solid transparent`,
                    borderRight: `${props.x}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.x}px solid transparent`,
                    borderRight: `${props.y}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.y}px solid transparent`,
                    borderRight: `${props.x}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.x}px solid transparent`,
                    borderRight: `${props.y}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.y}px solid transparent`,
                    borderRight: `${props.x}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.x}px solid transparent`,
                    borderRight: `${props.y}px solid transparent`
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderBottom: `100px solid #333`,
                    borderLeft: `${props.y}px solid transparent`,
                    borderRight: `${props.y}px solid transparent`
                  }}
                />
              </div>
            );
          }}
        </Spring>
      </div>
    );
  }
}
