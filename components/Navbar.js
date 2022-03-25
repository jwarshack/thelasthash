import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../public/img/logo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/'><a><Image src={logo}/></a></Link>
      <ul className={styles.menu}>
        <li>News</li>
        <li>Education</li>
      </ul>

    </div>
  )
}
