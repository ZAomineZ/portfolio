import styles from "../styles/Portfolio.module.scss"
import Image from "next/image"

export function SectionPortfolio() {
  return (
    <section className={`${styles.portfolio}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`text_left ${styles.main_title}`}>
              <h2>Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <nav className={styles.nav}>
              <ul>
                <li className={styles.active}>
                  <a href="#">ALL</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
                <li>
                  <a href="#">BACKEND</a>
                </li>
                <li>
                  <a href="#">FRONTEND</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="portfolio_card">
          <div className={`row ${styles.project_card}`}>
            <div className={`col-md-6 col-lg-5 ${styles.project_card_image}`}>
              <Image
                src="/img/project.png"
                alt="Project image"
                quality={100}
                width={939}
                height={720}
              />
            </div>
            <div className={`col-md-6 col-lg-7  ${styles.project_card_info}`}>
              <h3 className={styles.project_card_title}>
                Mobile and desktop app for London hostel store
              </h3>
              <p className={styles.project_card_description}>
                Do answered bachelor occasion in of offended no concerns. Supply
                worthy warmth branch of no ye. Voice tried known to as my to.
                Though wished merits or be. Alone visit use these smart rooms
                ham.
              </p>
              <p className={styles.project_card_stack}>Used stack:</p>
              <ul className={styles.tags}>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className={`row ${styles.project_card}`}>
            <div className={`col-md-6 col-lg-5 ${styles.project_card_image}`}>
              <Image
                src="/img/project.png"
                alt="Project image"
                quality={100}
                width={939}
                height={720}
              />
            </div>
            <div className={`col-md-6 col-lg-7  ${styles.project_card_info}`}>
              <h3 className={styles.project_card_title}>
                Mobile and desktop app for London hostel store
              </h3>
              <p className={styles.project_card_description}>
                Do answered bachelor occasion in of offended no concerns. Supply
                worthy warmth branch of no ye. Voice tried known to as my to.
                Though wished merits or be. Alone visit use these smart rooms
                ham.
              </p>
              <p className={styles.project_card_stack}>Used stack:</p>
              <ul className={styles.tags}>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className={`row ${styles.project_card}`}>
            <div className={`col-md-6 col-lg-5 ${styles.project_card_image}`}>
              <Image
                src="/img/project.png"
                alt="Project image"
                quality={100}
                width={939}
                height={720}
              />
            </div>
            <div className={`col-md-6 col-lg-7  ${styles.project_card_info}`}>
              <h3 className={styles.project_card_title}>
                Mobile and desktop app for London hostel store
              </h3>
              <p className={styles.project_card_description}>
                Do answered bachelor occasion in of offended no concerns. Supply
                worthy warmth branch of no ye. Voice tried known to as my to.
                Though wished merits or be. Alone visit use these smart rooms
                ham.
              </p>
              <p className={styles.project_card_stack}>Used stack:</p>
              <ul className={styles.tags}>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
