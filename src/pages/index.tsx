import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
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
        <Header />
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  )
}
