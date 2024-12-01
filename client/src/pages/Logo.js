import * as React from "react";
import { jsx } from "@emotion/react";

export function Logo() {
  return (
    <h2
      css={{
        color: "rgba(72, 128, 255, 1)",
        alignSelf: "center",
        zIndex: "10",
        margin: "-5px 0 0 15px",
        font: "800 24px Nunito Sans, sans-serif",
        "@media (max-width: 991px)": {
          fontSize: "24px",
        },
      }}
    >
      <span>mentor</span>
      <span
        css={{
          color: "rgba(32,34,36,1)",
        }}
      >
        Bridge
      </span>
    </h2>
  );
}