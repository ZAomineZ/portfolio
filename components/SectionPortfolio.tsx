import styles from "../styles/Portfolio.module.scss"
import Image from "next/image"
import { Modal } from "./Modal"
import { useEffect, useState } from "react"
import { Project } from "../types/Project"
import { ProjectsData } from "../data/projects"
import { fadeInUp } from "react-animations"
import { subscribe } from "../utils/Event"

export function SectionPortfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [projectCurrent, setProjectCurrent] = useState<Project | null>(null)
  const [optionProject, setOptionProject] = useState<string>("all")

  useEffect(() => {
    setProjects(ProjectsData)

    subscribe("closeModal", () => {
      setProjectCurrent(null)
    })
  }, [])

  const updateOptionProject = (option: string) => {
    setOptionProject(option)

    if (option !== "all") {
      setProjects(ProjectsData.filter((project) => project.type === option))
    }
    if (option === "all") {
      setProjects(ProjectsData)
    }
  }

  console.log(fadeInUp)

  return (
    <>
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
            {projects.map((project) => {
              return (
                <div
                  className={`row ${styles.project_card}`}
                  key={project.id}
                  onClick={() => setProjectCurrent(project)}
                >
                  <div
                    className={`col-md-6 col-lg-5 ${styles.project_card_image}`}
                  >
                    <Image
                      src="/img/project.png"
                      alt="Project image"
                      quality={100}
                      width={939}
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
                    <p className={styles.project_card_stack}>Used stack:</p>
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
