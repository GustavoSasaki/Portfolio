import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'


//to-do fix triangle not in center in go home button footer

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex flex-col justify-between bg-primary min-h-screen ${inter.className} text-secondary font-medium`}>
      <header className="bg-primary-light">
        <nav>
          hello
        </nav>
      </header>

      <main className=" grow">
        <Hero />


      </main>
      
      <Footer />
    </div>
  )
}
