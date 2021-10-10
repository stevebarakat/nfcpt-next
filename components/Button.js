import React from 'react'
import styles from "./button.module.css";

const Button = ({ color, textColor, children }) => {
  return (
    <button
      className={styles.button}
      style={{
        color: textColor,
        background: color,
        border: "none",
      }}
    >
      {children}
    </button>
  )
}

export default Button
