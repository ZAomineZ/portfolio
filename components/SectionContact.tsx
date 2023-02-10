import styles from "../styles/Contact.module.scss"
import { MouseEvent, useState } from "react"
import Swal from "sweetalert2/dist/sweetalert2.js"

export function SectionContact() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setButtonDisabled((buttonDisabled) => !buttonDisabled)

    let data = { name, email, message }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (r) => {
      if (r.status === 200) {
        new Swal(
          "Bravo !",
          "Votre message as bien était envoyé !",
          "success"
        ).then((r: any) => r)

        setButtonDisabled((buttonDisabled) => !buttonDisabled)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        new Swal(
          "Attention",
          "Une erreur est survenue lors du traitement de vos données, veuillez réessayer !",
          "error"
        ).then((r: any) => r)

        setButtonDisabled((buttonDisabled) => !buttonDisabled)
      }
    })
  }

  return (
    <section
      className={styles.contact}
      style={{ backgroundImage: "url('/img/contact.jpg')" }}
      id="contact"
    >
      <div className={`container ${styles.contact_section}`}>
        <div className="row">
          <div className="col-md-12">
            <p className={styles.contact_title}>Me Contacter_</p>
          </div>
        </div>
        <div className={`row ${styles.contacts}`}>
          <div className="col-md-5 col-lg-4">
            <div className={styles.contacts_list}>
              <dl className={styles.contact_list}>
                <dt>Email:</dt>
                <dd>
                  <a href="mailto:vincentcapek@gmail.com">
                    vincentcapek@gmail.com
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div className="col-md-7 col-lg-5">
            <div>
              <p className={styles.contacts_form_title}>
                Veuillez saisir les informations_
              </p>
              <form action="#">
                <div className={styles.form_group}>
                  <input
                    type="text"
                    placeholder="Votre nom..."
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                  <span className={styles.form_validation}></span>
                  <span className={styles.form_invalid_icon}>
                    <i className="mdi mdi-close"></i>
                  </span>
                </div>
                <button
                  className={styles.button}
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  disabled={buttonDisabled}
                >
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
