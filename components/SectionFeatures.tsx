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
              <p>I offer tailor-made web development services, including the creation of high-performance applications using Laravel for the back-end and Vue 3 for the front-end.</p>
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
              <h4>Web development</h4>
              <p>
                Website creation | Application to meet customer needs
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
              <h4>Web projects</h4>
              <p>
                Creation of landing pages, window sites, e-commerce and web applications
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
              <h4>Multi-Platform</h4>
              <p>Tablet & mobile compatibility</p>
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
              <h4>SEO</h4>
              <p>Code optimized for SEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
