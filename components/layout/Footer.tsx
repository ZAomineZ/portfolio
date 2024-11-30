import styles from "../../styles/Footer.module.scss"
import Image from "next/image"
import { TwitterIcon } from "../icons/Twitter"
import { GitlabIcon } from "../icons/Gitlab"
import { LinkedinIcon } from "../icons/Linkedin"
import { GithubIcon } from "../icons/Github"
import { DevToIcon } from "../icons/Dev-to"

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className="row justify_content_center">
          <div className="col-lg-12">
            <div className="flex_column">
              <div className={styles.footer_logo}>
                <a href="components/layout/Footer#">
                  <Image
                    src="/img/logo-new.png"
                    alt="Logo brand"
                    width={140}
                    height={35}
                    quality={100}
                  />
                </a>
                <h4>Follow me</h4>
              </div>
              <div className={styles.footer_social}>
                <a
                  href="https://x.com/DevBlams"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://gitlab.com/Bluup-Aomine"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitlabIcon />
                </a>
                <a
                  href="https://github.com/ZAomineZ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/vincent-capek-482077252/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://dev.to/blamsa0mine"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DevToIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`row justify_content_center ${styles.footer_bottom}`}>
          <p className="col-lg-8 col-sm-12">
            © {new Date()?.getFullYear()} Vincent Capek. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
