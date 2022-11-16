import styles from "../styles/Contact.module.scss"

export function SectionContact() {
  return (
    <section
      className={styles.contact}
      style={{ backgroundImage: "url('/img/contact.jpg')" }}
    >
      <div className={`container ${styles.contact_section}`}>
        <div className="row">
          <div className="col-md-12">
            <p className={styles.contact_title}>Get in touch_</p>
          </div>
        </div>
        <div className={`row ${styles.contacts}`}>
          <div className="col-md-5 col-lg-4">
            <div className={styles.contacts_list}>
              <dl className={styles.contact_list}>
                <dt>Email:</dt>
                <dd>
                  <a href="mailto:mail@mail.com">mail@mail.com</a>
                </dd>
              </dl>
            </div>
          </div>
          <div className="col-md-7 col-lg-5">
            <div>
              <p className={styles.contacts_form_title}>
                Or just write me a letter here_
              </p>
              <form action="#">
                <div className={styles.form_group}>
                  <input
                    type="text"
                    placeholder="Votre nom..."
                    required={true}
                  />
                  <span className={styles.form_validation}></span>
                  <span className={styles.form_invalid_icon}>
                    <i className="mdi mdi-close"></i>
                  </span>
                </div>
                <div className={styles.form_group}>
                  <input
                    type="email"
                    placeholder="Votre mail..."
                    required={true}
                  />
                  <span className={styles.form_validation}></span>
                  <span className={styles.form_invalid_icon}>
                    <i className="mdi mdi-close"></i>
                  </span>
                </div>
                <div className={styles.form_group}>
                  <textarea
                    placeholder="Votre message..."
                    required={true}
                  ></textarea>
                  <span className={styles.form_validation}></span>
                  <span className={styles.form_invalid_icon}>
                    <i className="mdi mdi-close"></i>
                  </span>
                </div>
                <button className={styles.button} type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}