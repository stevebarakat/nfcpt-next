import React from 'react'
import styles from "./button.module.css";

const Button = ({ color, borderColor, textColor, side, children }) => {
  return (
    <button
      className={styles.button}
      style={{
        color: textColor,
        background: color,
        border: side === "right" ? "none" : "1px solid " + borderColor,
        borderRadius: side === "right" ? "0" : "4px",
        padding: side === "right" ? "0.5rem 1rem" : "1rem",
        fontSize: side === "right" && "1rem"
      }}
    >
      {children}
    </button>
  )
}

export default Button
