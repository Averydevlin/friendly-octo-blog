import Head from 'next/head'
import Image from 'next/image'
import styles from './navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
        <input className={styles.input} placeholder="Search..." />
      </nav>
    )
  }