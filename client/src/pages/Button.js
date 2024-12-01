import * as React from "react";
import { jsx } from "@emotion/react";

export function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      css={{
        borderRadius: "8px",
        backgroundColor: "rgba(72, 128, 255, 1)",
        alignSelf: "center",
        marginTop: "55px",
        width: "418px",
        maxWidth: "100%",
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        letterSpacing: "-0.07px",
        padding: "15px 70px",
        font: "700 20px Nunito Sans, sans-serif",
        border: "none",
        cursor: "pointer",
        "@media (max-width: 991px)": {
          marginTop: "40px",
          padding: "15px 20px",
        },
      }}
    >
      {children}
    </button>
  );
}