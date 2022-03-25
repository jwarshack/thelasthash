import React from 'react'
import Footer from './Footer'
import styles from './Layout.module.css'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
