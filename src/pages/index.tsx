import { Inter } from '@next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { MainStack } from '@/components/Hero/MainStack/MainStack'
import { Technologies } from '@/components/Technologies/Technologies'
import { NavBar } from '@/components/NavBar/NavBar'
import { HeadBox } from '@/components/HeadBox'
import { useRef } from 'react'
import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Projects from '@/components/Projects/Projects'
import localFont  from '@next/font/local'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const inter = Inter({ subsets: ['latin'] })
export const japFont = localFont({src:'../util/NotoSansJP-VariableFont_wght.ttf', variable : '--font-jap'})


export default function Home() {
  const navRefs = {
    contact: useRef(null),
    about: useRef(null),
    projects: useRef(null)
  }
  return (
    <>
      <HeadBox />
      <NavBar  {...navRefs} />
      <div className={`flex flex-col justify-between items-stretch bg-primary min-h-screen ${inter.className} text-secondary font-medium`}>

        <main className=" grow ">
          <div className="bg-primary-light">
            <div className="bg-primary pb-24">
              <Hero variant={'back'} />
            </div>

            <MainStack />
            <About ref={navRefs.about} />
          </div>
          <Technologies />
          <Projects ref={navRefs.projects} />
          <Contact ref={navRefs.contact} />

        </main>

        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'hero','contact',
    ])),
  },
})