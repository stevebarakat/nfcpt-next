import React from "react";

const Button = ({
  color,
  borderColor,
  textColor,
  side,
  children,
  width,
}) => {
  return (
    <>
      <button
        style={{
          border:
            side === "right" ? "none" : "1px solid " + borderColor,
          borderRadius: side === "right" ? "0 4px 4px 0" : "4px",
          padding: side === "right" ? "0.5rem 1rem" : "1rem",
          fontSize: side === "right" && "1rem",
          background: color,
          color: textColor,
        }}
      >
        {children}
      </button>
      <style jsx>{`
        button {
          border: 1px solid transparent;
          border-radius: 0.25rem;
          font-weight: 700;
          font-size: 0.875rem;
          white-space: nowrap;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
};

export default Button;
