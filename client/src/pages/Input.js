import * as React from "react";
import { jsx } from "@emotion/react";

export function Input({ label, type, value, name, required, id }) {
  return (
    <div css={{ marginTop: "15px" }}>
      {label && (
        <label
          htmlFor={id || name}
          css={{
            color: "rgba(32, 34, 36, 1)",
            letterSpacing: "-0.06px",
            display: "block",
            marginBottom: "15px",
            font: "600 18px Nunito Sans, sans-serif",
          }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        id={id || name}
        required={required}
        css={{
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "rgba(241, 244, 249, 1)",
          color: "rgba(166, 166, 166, 1)",
          letterSpacing: "-0.06px",
          padding: "16px",
          font: "600 18px Nunito Sans, sans-serif",
          border: "1px solid rgba(216, 216, 216, 1)",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            paddingRight: "20px",
          },
        }}
      />
    </div>
  );
}