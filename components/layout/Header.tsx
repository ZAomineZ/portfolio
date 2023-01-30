import styles from "../../styles/Header.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const [collapseShow, setCollapseShow] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", isFixedCallback)
    return () => {
      window.removeEventListener("scroll", isFixedCallback)
    }
  }, [])

  const isFixedCallback = (e: Event) => {
    const scrollTop = window.scrollY
    if (scrollTop >= 100) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }

  return (
    <header
      className={`${styles.header} ${isFixed ? styles.navbar_fixed : ""}`}
    >
      <div className={styles.main_menu}>
        <nav
          className={`${styles.navbar} ${styles.navbar_expand_lg} ${styles.navbar_light}`}
        >
          <div className={`container ${styles.navbar_container}`}>
            {/* Logo brand */}
            <Link href="/" className={styles.navbar_brand}>
              <Image
                src="/img/logo.png"
                alt="Logo brand"
                width={140}
                height={35}
                quality={100}
              />
            </Link>
            <button
              className={styles.navbar_toggler}
              aria-expanded={collapseShow}
              onClick={() => setCollapseShow(!collapseShow)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {/* Nav links header */}
            <div
              className={`${styles.navbar_collapse} ${
                collapseShow ? styles.show : ""
              }`}
            >
              <ul
                className={`${styles.nav} ${styles.navbar_nav} ${styles.menu_nav} justify_content_end`}
              >
                <li className={`${styles.nav_item} ${styles.active}`}>
                  <a href="#home_banner" className={styles.nav_link}>
                    Accueil
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a href="#about" className={styles.nav_link}>
                    A Propos
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a href="#services" className={styles.nav_link}>
                    Services
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a href="#portfolio" className={styles.nav_link}>
                    Portfolio
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a href="#contact" className={styles.nav_link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
