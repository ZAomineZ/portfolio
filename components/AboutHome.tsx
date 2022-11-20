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
              <h2>
                let’s <br />
                Introduce about <br />
                myself
              </h2>
              <p>
                Whose given. Were gathered. There first subdue greater. Bearing
                you Whales heaven midst their. Beast creepeth. Fish days.
              </p>
              <p>
                Is give may shall likeness made yielding spirit a itself
                together created after sea is in beast beginning signs open god
                you're gathering whose gathered cattle let. Creature whales
                fruit unto meat the life beginning all in under give two.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
