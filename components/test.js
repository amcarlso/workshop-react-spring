import React from "react";
import { Spring } from "react-spring";

export default function() {
  return (
    <div>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {mot => {
          return <div style={mot}>Example</div>;
        }}
      </Spring>
    </div>
  );
}
