import styles from "../styles/Home.module.scss"
import Image from "next/image"

export function SectionFeatures() {
  return (
    <section className={styles.features_area} id="services">
      <div className="container">
        <div className="row justify_content_center">
          <div className="text_center col-lg-8">
            <div className={styles.main_title}>
              <h2>Service offers</h2>
              <p>
                Is give may shall likeness made yielding spirit a itself togeth
                created after sea <br /> is in beast beginning signs open god
                you're gathering ithe
              </p>
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
              <h4>Wev Developer</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <Image
                src="/img/service-1.png"
                alt="Icon development"
                quality={100}
                width={63}
                height={69}
              />
              <h4>Wev Developer</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <Image
                src="/img/service-1.png"
                alt="Icon development"
                quality={100}
                width={63}
                height={69}
              />
              <h4>Wev Developer</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className={styles.feature_item}>
              <Image
                src="/img/service-1.png"
                alt="Icon development"
                quality={100}
                width={63}
                height={69}
              />
              <h4>Wev Developer</h4>
              <p>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
