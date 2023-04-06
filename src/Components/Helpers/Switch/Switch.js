import { useState } from "react"
import styles from "./Switch.module.scss"

export const Switch = (props) => {
  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        name={`switch${props.numberToIdentify}`}
        className={styles.switchSelf}
        id={`switch${props.numberToIdentify}`}
        // checked={props.checked}
        // onClick={props.onClick}
        {...props}
      />
      <label for={`switch${props.numberToIdentify}`}></label>
    </div>
  )
}
