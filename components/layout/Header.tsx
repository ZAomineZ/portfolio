import styles from "../../styles/Header.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false)

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
            <a href="components/layout/Header#" className={styles.navbar_brand}>
              <Image
                src="/img/logo.png"
                alt="Logo brand"
                width={140}
                height={35}
                quality={100}
              />
            </a>
            <button className={styles.navbar_toggler}></button>
            {/* Nav links header */}
            <div className={`${styles.navbar_collapse}`}>
              <ul
                className={`${styles.nav} ${styles.navbar_nav} ${styles.menu_nav} justify_content_end`}
              >
                <li className={`${styles.nav_item} ${styles.active}`}>
                  <a
                    href="components/layout/Header#"
                    className={styles.nav_link}
                  >
                    Home
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a
                    href="components/layout/Header#"
                    className={styles.nav_link}
                  >
                    About
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a
                    href="components/layout/Header#"
                    className={styles.nav_link}
                  >
                    Services
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a
                    href="components/layout/Header#"
                    className={styles.nav_link}
                  >
                    Portfolio
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a
                    href="components/layout/Header#"
                    className={styles.nav_link}
                  >
                    Pages
                  </a>
                </li>
                <li className={styles.nav_item}>
                  <a
                    href="components/layout/Header#"
                    className={styles.nav_link}
                  >
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