import React from "react";
import MouseMove from "./../components/MouseMove";
import Link from "next/link";

export default function() {
  return (
    <div>
      {/* Return */}
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        <Link href="/">
          <button>Go Back</button>
        </Link>
      </div>
      {/* ///////////////////// */}
      <MouseMove />
    </div>
  );
}
