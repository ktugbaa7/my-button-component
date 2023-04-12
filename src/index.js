import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (
    <div>
      <button
        className={props.type ? styles[props.type] : styles.primaryBtn}
        {...props}
      >
        {props.text}
      </button>
    </div>
  )
}
