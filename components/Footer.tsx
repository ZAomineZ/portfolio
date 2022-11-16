import styles from "../styles/Footer.module.scss"
import Image from "next/image"
import { TwitterIcon } from "./icons/Twitter"
import { GitlabIcon } from "./icons/Gitlab"
import { LinkedinIcon } from "./icons/Linkedin"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row justify_content_center">
          <div className="col-lg-12">
            <div className="flex_column">
              <div className={styles.footer_logo}>
                <a href="#">
                  <Image
                    src="/img/logo.png"
                    alt="Logo brand"
                    width={140}
                    height={35}
                    quality={100}
                  />
                </a>
                <h4>Suivez-moi</h4>
              </div>
              <div className={styles.footer_social}>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <GitlabIcon />
                </a>
                <a href="#">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`row justify_content_center ${styles.footer_bottom}`}>
          <p className="col-lg-8 col-sm-12">
            © {new Date()?.getFullYear()} Vincent Capek. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
