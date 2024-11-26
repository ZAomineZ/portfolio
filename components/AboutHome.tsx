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
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Bonjour, je m'appelle Vincent, j'ai 24 ans et je suis
                développeur web Full-Stack freelance spécialisé en PHP, avec une
                expertise en Laravel pour le back-end et Vue 3 pour le
                front-end.
              </p>
              <p>
                Passionné par le développement web, je conçois des applications
                modernes, performantes et adaptées aux besoins de mes clients,
                en alliant robustesse, esthétique et fluidité. Mon approche
                polyvalente me permet de gérer des projets de bout en bout, de
                la création d'API à l'intégration d'interfaces utilisateur
                intuitives.
              </p>
              <p>
                En utilisant les dernières technologies et bonnes pratiques, je
                m'engage à fournir un code de qualité, optimisé et facile à
                maintenir, tout en restant à l’écoute des attentes spécifiques
                de chaque client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
