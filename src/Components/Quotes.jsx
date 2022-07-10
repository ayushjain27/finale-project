import React from 'react'
import styles from './Quotes.module.css'

const Quotes = () => {
 
  return (
    <>
        <div className={`${styles.containerFluid} container-fluid`}>
            <div className={styles.box}>AyushJain</div>
        </div>
        <div className={styles.JoinContainer}>
            <div className={styles.Join}>Join Us/Register</div>
        </div>
    </>
  )
}

export default Quotes
