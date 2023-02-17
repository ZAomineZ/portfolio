import styles from "../styles/Home.module.scss"
import Image from "next/image"

export function SectionFeatures() {
  return (
    <section className={styles.features_area} id="services">
      <div className="container">
        <div className="row justify_content_center">
          <div className="text_center col-lg-8">
            <div className={styles.main_title}>
              <h2>Services</h2>
              <p>Voici les services que je vous propose</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <Image
                src="/img/service-1.png"
                alt="Icon development"
                quality={100}
                width={63}
                height={69}
              />
              <h4>Développement Web</h4>
              <p>
                Création de site web | Application en répondant aux besoins du
                client
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <img
                src="/img/service_project.png"
                alt="Service Projets web"
                width={63}
                height={69}
              />
              <h4>Projets Web</h4>
              <p>
                Création de landing page, site-vitrine, e-commerce et
                application web
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <img
                src="/img/service_multi_plateforme.png"
                alt="Service Multi-Plateforme"
                width={63}
                height={69}
              />
              <h4>Multi-Plateforme</h4>
              <p>Compatibilité tablette & mobile</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <img
                src="/img/service_seo.png"
                alt="Service référencement"
                width={63}
                height={69}
              />
              <h4>Référencement</h4>
              <p>Code optimisé pour du référencement naturel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
