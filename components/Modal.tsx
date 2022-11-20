import styles from "../styles/components/Modal.module.scss"
import styleHeader from "../styles/Header.module.scss"
import Image from "next/image"
import { Project } from "../types/Project"
import { useEffect } from "react"
import { publish } from "../utils/Event"

interface Props {
  project: Project | null
}

export function Modal({ project }: Props) {
  useEffect(() => {
    if (project) {
      document.body.classList.add(styles.modal_open)
      document
        .querySelector("header")
        ?.classList.remove(styleHeader.navbar_fixed)
    }
  }, [project])

  const handleClose = () => {
    document.body.classList.remove(styles.modal_open)
    document.querySelector("header")?.classList.add(styleHeader.navbar_fixed)

    publish("closeModal")
  }

  return (
    <>
      <div
        className={`${styles.modal} ${styles.portfolio_modal} ${styles.fade} ${
          project ? styles.show : ""
        }`}
      >
        <div
          className={`${styles.modal_dialog} ${styles.modal_lg}`}
          role="document"
        >
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <button
                type="button"
                className={styles.modal_header_close}
                onClick={handleClose}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div
              className={`${styles.modal_body} col-md-11 col-lg-9 ml_auto mr_auto`}
            >
              <p className={styles.modal_title}>{project?.title}</p>
              <img
                src="/img/project_1.png"
                className={styles.modal_image}
                alt=""
              />

              <p className={styles.modal_description}>{project?.description}</p>
              <div className={styles.modal_stack}>
                <p className={styles.modal_stack_title}>Using stack:</p>
                <ul className={styles.tags}>
                  {project?.stacks.map((stack, index) => {
                    return <li key={index + 1}>{stack}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {project && (
        <div
          className={`${styles.modal_background} ${styles.fade} ${styles.show}`}
        ></div>
      )}
    </>
  )
}
