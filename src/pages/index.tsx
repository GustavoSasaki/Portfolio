import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'


//to-do fix triangle not in center in go home button footer

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col justify-between bg-primary min-h-screen ${inter.className}`}
    >
      <header className="bg-primary-light">
        <nav>
          hello
        </nav>
      </header>
      <div className=" grow bg-red-700"></div>
      aaa
      <Footer />
    </main>
  )
}
