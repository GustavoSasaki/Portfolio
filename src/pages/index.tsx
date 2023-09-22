import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { negativeMargin, MainStack } from '@/components/Hero/MainStack/MainStack'
import { Technologies } from '@/components/Technologies/Technologies'
import { Projects } from '@/components/Projects/Projects'


//to-do fix triangle not in center in go home button footer
//put aniamtion of zoom and change color to greem in project img
//change font
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex flex-col justify-between bg-primary min-h-screen ${inter.className} text-secondary font-medium`}>
      <header className="bg-primary-light">
        <nav>
          hello
        </nav>
      </header>

      <main className=" grow ">
        <div className="bg-primary-light">
          <div className={`bg-primary`}>
            <Hero />
            <div className={` h-[${negativeMargin}]`} />
          </div>

          <MainStack />
          <About />
        </div>
        <Technologies />
        <Projects />

      </main>

      <Footer />
    </div>
  )
}
