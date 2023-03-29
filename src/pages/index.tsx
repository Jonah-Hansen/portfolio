import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Home from '@/components/Home/Home'
import Work from '@/components/Work/Work'
import { motion, useScroll, useTransform } from 'framer-motion'
import Head from 'next/head'

export default function HomePage() {

  const { scrollY } = useScroll()
  const stars = useTransform(scrollY, [0, 2000], ['0%', '50%'])
  const planets = useTransform(scrollY, [0, 1], ['0%', '50%'])
  const bigPlanet = useTransform(scrollY, [0, 1], ['0%', '50%'])

  return (
    <>
      <Head>
        <title>Jonah Hansen</title>
        <meta name="description" content="Jonah Hansen Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

        <Header />

        <motion.div style={{ y: stars }} className='stars' />

        <motion.div style={{ y: planets }} className='planets' />

        <motion.div style={{ y: bigPlanet }} className='big-planet' />

        <Home />

        <About />

        <Work />

        <Contact />

        <Footer />
      </main>
    </>
  )
}
