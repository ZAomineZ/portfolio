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
            <link rel="stylesheet" href="" />
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
              <h2>Who am I ?</h2>
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hello, my name is Vincent, I'm 24 years old and I'm a
                freelance full-stack web developer specializing in PHP, with expertise in Laravel for the back-end and
                Vue 3 for the front-end.
              </p>
              <p>
                Passionate about web development, I design modern, high-performance applications tailored to my
                customers' needs, combining robustness, aesthetics and fluidity. My versatile approach enables me to
                manage projects from start to finish, from API creation to the integration of intuitive user interfaces.
              </p>
              <p>
                Using the latest technologies and best practices, I'm committed to delivering quality code that's
                optimized and easy to maintain, while remaining attentive to the specific needs of each customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
