import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { MainStack } from '@/components/Hero/MainStack/MainStack'
import { Technologies } from '@/components/Technologies/Technologies'
import { Projects } from '@/components/Projects/Projects'
import { NavBar } from '@/components/NavBar/NavBar'
import { Contact } from '@/components/Contact/Contact'
import { HeadBox } from '@/components/HeadBox'


//fac icon
//change photo and url of head meta
//fazer gustavo sasaki com ki verde
//add transion in animation quandoe ntrando em sessao
//buy a webite url
//make pc version
//make mobile menu
//make pc menu
//create detail rpoject page

//not in mvp:
//add pt version
//use better photo
// use next img
//to-do fix triangle not in center in go home button footer

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadBox />
      <div className={`flex flex-col justify-between bg-primary min-h-screen ${inter.className} text-secondary font-medium`}>
        <header className="bg-primary-light">
          <NavBar />
        </header>

        <main className=" grow ">
          <div className="bg-primary-light">
            <div className="bg-primary pb-24">
              <Hero />
            </div>

            <MainStack />
            <About />
          </div>
          <Technologies />
          <Projects />
          <Contact />

        </main>

        <Footer />
      </div>
    </>
  )
}
