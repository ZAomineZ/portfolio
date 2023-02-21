import Head from "next/head"
import { AboutHome } from "../components/AboutHome"
import { Header } from "../components/layout/Header"
import { SectionHomeBanner } from "../components/SectionHomeBanner"
import { SectionFeatures } from "../components/SectionFeatures"
import SectionPortfolio from "../components/SectionPortfolio"
import { SectionContact } from "../components/SectionContact"
import { Footer } from "../components/layout/Footer"
import { ProjectsData } from "../data/projects"
import { Project } from "../types/Project"

interface IProps {
  dataProjects: Project[]
}

function Home({ dataProjects }: IProps) {
  return (
    <>
      <Head>
        <title>Portfolio Vincent Capek | Développeur PHP Fullstack</title>
        <meta
          name="description"
          content="Je m'appelle Vincent, j'ai 22 ans, je suis développeur Web FullStack PHP."
        />
        <meta name="robots" content="follow,index" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script async src="//static.getclicky.com/101398713.js"></script>
        <noscript>
          <p>
            <img
              alt="Clicky"
              width="1"
              height="1"
              src="//in.getclicky.com/101398713ns.gif"
            />
          </p>
        </noscript>
      </Head>
      <Header />
      {/* Section home banner */}
      <SectionHomeBanner />
      {/* Section about */}
      <AboutHome />
      {/* Section services */}
      <SectionFeatures />
      {/* Section portfolio */}
      <SectionPortfolio dataProjects={dataProjects} />
      {/* Section contact */}
      <SectionContact />
      {/* Section footer */}
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { dataProjects: ProjectsData }, // will be passed to the page component as props
  }
}

export default Home
