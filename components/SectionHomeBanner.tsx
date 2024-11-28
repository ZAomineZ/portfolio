import styles from "../styles/Home.module.scss"
import stylesButton from "../styles/components/Button.module.scss"
import Image from "next/image"

export function SectionHomeBanner() {
  return (
    <section className={styles.home_banner_area} id="home_banner">
      <div className={styles.banner_inner}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-7 ${styles.col}`}>
              <div className={styles.banner_content}>
                <h3 className="text_uppercase">Hello</h3>
                <h1 className="text_uppercase">I'm Vincent Capek</h1>
                <h5>PHP Fullstack Developer</h5>
                <div className="d_flex align_items_center">
                  <a href="#contact" className={stylesButton.primary_button}>
                    <span>Contact me</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styles.home_right_image}>
                <Image
                  src="/img/home-right.png"
                  alt="Banner right home"
                  quality={100}
                  width={724}
                  height={703}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
