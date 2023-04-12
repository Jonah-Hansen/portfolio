import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Home from '@/components/Home/Home'
import Work from '@/components/Work/Work'
import Head from 'next/head'

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

        <div className="parallax-container">
          <Header />

          <div className='stars' />

          <div className='planets' />

          <div className='big-planet' />

          <div className='astronaut' />

          <Home />

          <About />

          <Work />

          <Contact />

          <Footer />
        </div>
      </main>
    </>
  )
}
