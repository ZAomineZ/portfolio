import Head from "next/head"
import { AboutHome } from "../components/AboutHome"
import { Header } from "../components/layout/Header"
import { SectionHomeBanner } from "../components/SectionHomeBanner"
import { SectionFeatures } from "../components/SectionFeatures"
import { SectionPortfolio } from "../components/SectionPortfolio"
import { SectionContact } from "../components/SectionContact"
import { Footer } from "../components/layout/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Vincent Capek | Développeur PHP Fullstack</title>
        <meta
          name="description"
          content="Je m'appelle Vincent, j'ai 22 ans, je suis développeur Web FullStack PHP."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {/* Section home banner */}
      <SectionHomeBanner />
      {/* Section about */}
      <AboutHome />
      {/* Section services */}
      <SectionFeatures />
      {/* Section portfolio */}
      <SectionPortfolio />
      {/* Section contact */}
      <SectionContact />
      {/* Section footer */}
      <Footer />
    </>
  )
}
