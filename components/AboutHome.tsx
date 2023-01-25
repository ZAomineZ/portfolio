import styles from "../styles/Home.module.scss"
import Image from "next/image"

export function AboutHome() {
  return (
    <section
      className={`${styles.about_area} ${styles.section_gap}`}
      id="about"
    >
      <div className="container">
        <div className="row align_items_center justify_content_start">
          <div className="col-lg-5">
            <div className={styles.about_image}>
              <Image
                src="/img/about-us.png"
                alt="Image about us"
                quality={100}
                width={687}
                height={631}
              />
            </div>
          </div>
          <div className="offset_lg_1 col-lg-5">
            <div className={`text_left ${styles.main_title}`}>
              <h2>Qui suis-je ?</h2>
              <p>
                Je m'appelle Vincent, j'ai 22 ans, je suis développeur Web
                FullStack PHP.
              </p>
              <p>
                Je code principalement en laravel coté backend et avec Vue 3
                coté front-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
