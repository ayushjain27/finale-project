import React from 'react'
import styles from './Navbar.module.css'
import Modal from './Modal'

const Navbar = () => {
  return (
    <>
        <div className={styles.nav}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-bars"></i>
            </button>
            <div className={styles.logo}>LOGO</div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Login
            </button>
        </div>
        <Modal />
    </>
  )
}

export default Navbar
