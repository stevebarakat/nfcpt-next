import React from 'react'
import styles from "./button.module.css";

const Button = ({ color, borderColor, textColor, children }) => {
  return (
    <button
      className={styles.button}
      style={{
        color: textColor,
        background: color,
        border: "1px solid " + borderColor
      }}
    >
      {children}
    </button>
  )
}

export default Button
