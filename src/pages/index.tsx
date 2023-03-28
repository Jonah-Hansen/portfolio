import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Header from '@/components/Header/Header'
import Home from '@/components/Home/Home'
import Work from '@/components/Work/Work'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Head from 'next/head'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Jonah Hansen</title>
        <meta name="description" content="Jonah Hansen Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Parallax pages={4} config={{ mass: 0 }} >
          <ParallaxLayer sticky={{ start: 0, end: 3 }} >
            <Header />
          </ParallaxLayer>
          <ParallaxLayer speed={-.9} factor={5} offset={-1} >
            <div className='stars' />
          </ParallaxLayer>

          <ParallaxLayer speed={-.8}  >
            <div className='planets' />
          </ParallaxLayer>

          <ParallaxLayer speed={-.4} >
            <div className='big-planet' />
          </ParallaxLayer>

          <ParallaxLayer offset={0} >
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={1} >
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} >
            <Work />
          </ParallaxLayer>

          <ParallaxLayer offset={3} >
            <Contact />
          </ParallaxLayer>

        </Parallax>
      </main>
    </>
  )
}
