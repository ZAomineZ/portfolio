import styles from "../styles/Portfolio.module.scss"
import Image from "next/image"
import { Modal } from "./Modal"
import { useEffect, useState } from "react"
import { Project } from "../types/Project"
import { ProjectsData } from "../data/projects"
import { fadeInUp } from "react-animations"
import { subscribe } from "../utils/Event"

interface IProps {
  dataProjects: Project[]
}

function SectionPortfolio({ dataProjects }: IProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [projectCurrent, setProjectCurrent] = useState<Project | null>(null)
  const [optionProject, setOptionProject] = useState<string>("all")
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    setProjects(dataProjects)

    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 1000)

    subscribe("closeModal", () => {
      setProjectCurrent(null)
    })
  }, [dataProjects])

  const updateOptionProject = (option: string) => {
    if (animate) return

    setOptionProject(option)

    setAnimate(true)

    if (option !== "all") {
      setProjects(dataProjects.filter((project) => project.type === option))
    }
    if (option === "all") {
      setProjects(dataProjects)
    }

    setTimeout(() => {
      setAnimate(false)
    }, 1000)
  }

  return (
    <>
      <section className={`${styles.portfolio}`} id="portfolio">
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
                  <li
                    className={optionProject === "all" ? styles.active : ""}
                    onClick={() => updateOptionProject("all")}
                  >
                    <a>ALL</a>
                  </li>
                  <li
                    className={optionProject === "backend" ? styles.active : ""}
                    onClick={() => updateOptionProject("backend")}
                  >
                    <a>BACKEND</a>
                  </li>
                  <li
                    className={
                      optionProject === "frontend" ? styles.active : ""
                    }
                    onClick={() => updateOptionProject("frontend")}
                  >
                    <a>FRONTEND</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div id="portfolio_card">
            {projects &&
              projects.map((project) => {
                return (
                  <div
                    className={`row ${styles.project_card} ${
                      animate && styles.project_card_animation
                    }`}
                    key={project.id}
                    onClick={() => setProjectCurrent(project)}
                  >
                    <div
                      className={`col-md-6 col-lg-5 ${styles.project_card_image}`}
                    >
                      <Image
                        src={`${project.image}`}
                        alt="Project image"
                        quality={100}
                        width={940}
                        height={720}
                      />
                    </div>
                    <div
                      className={`col-md-6 col-lg-7 ${styles.project_card_info}`}
                    >
                      <h3 className={styles.project_card_title}>
                        {project.title}
                      </h3>
                      <p className={styles.project_card_description}>
                        {project.description}
                      </p>
                      <p className={styles.project_card_stack}>
                        Technos utilisé:
                      </p>
                      <ul className={styles.tags}>
                        {project.stacks.map((stack, index) => (
                          <li key={index + 1}>{stack}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      {projectCurrent && <Modal project={projectCurrent} />}
    </>
  )
}

export default SectionPortfolio
