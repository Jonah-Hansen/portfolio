import styles from '@/styles/ProjectsPages.module.scss'
import Image from 'next/image'

export default function EasyInstrumentals() {
  return (
    <main className={styles.main}>
      <div className={styles.details}>
        <div>
          <h1>Easy Instrumentals</h1>
          <p>My capstone project for the <a target='_blank' rel='noopener noreferrer' href="https://brainstation.io/">BrainStation</a> Web Development Bootcamp, fall 2022</p>
          <p>In the final 2 weeks of bootcamp, we were tasked with planning out and developing our first full unique CRUD app.</p>

          <p>Wanting to come up with something truly unique and impressive, I designed and built Easy Instrumentals: a single-page web application for music production prototyping. Allowing producers, musicians, singers, and anyone interested in music a way to quickly and easily create a basic instrumental that can be used as a starting point for a more complete song. </p>

          <h2>Features</h2>

          <p>Easy Instrumentals is intended to be a simple drag-and-drop musical arrangement tool. Users can drag tracks from the track browser and drop them in the corresponding space on the timeline. By mixing and matching different tracks, the user can create a custom music mix!</p>

          <p>Each track can be previewed before it is added, and once added, each track has individual volume controls.</p>

          <p>Easy Instrumentals also features keyboard controls for play/pause and with the spacebar, and stop with &apos;enter&apos;</p>
        </div>
        <div>
          <h2>Tech Stack</h2>
          <p>Easy Instrumentals is built using React and SASS + MUI. I used Supabase BAAS for file storage and HowlerJS for simultaneous audio playback.</p>

          <h2>final notes:</h2>
          <p>Easy Instrumentals was a fantastic end to my bootcamp experience! </p>
          <p>Having only 2 weeks to design and program, I found myself succumbing to scope creep pretty early on. The majority of my first week was spent learning Supabase, and struggling to figure out how I was going to accomplish all that I wanted to do. After speaking with my amazing educators, they help me narrow down the key functionalities I needed and I scrapped much of what I had done up to that point, starting with a fresh perspective. Once I got into the groove however, the whole project came together quite nicely! </p>
          <p>All in all, building easy instrumentals was a bit of a stressful time, but in the end worth all the effort. With my skills and knowledge much more advanced than they were at the time, I plan to eventually revisit the project and rebuild it to how I first imagined it, without having to worry about a deadline.</p>

          <h2>links:</h2>
          <div className={styles.links}>
            <a target='_blank' rel='noopener noreferrer' href="https://easy-instrumentals.vercel.app/">Live</a>
            <a target='_blank' rel='noopener noreferrer' href="https://github.com/Jonah-Hansen/easy-instrumentals">Source</a>
          </div>
        </div>
      </div>
      <div className={styles.screenshots}>
        <div className={styles.image}><Image src={'/images/projects/EasyInstrumentals1.JPG'} fill alt='easy instrumentals screenshot' /> </div>
        <div className={styles.image}><Image src={'/images/projects/EasyInstrumentals.JPG'} fill alt='easy instrumentals screenshot' /> </div>
      </div>
    </main>
  )
}