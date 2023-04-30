import styles from '@/styles/ProjectsPages.module.scss'
import Image from 'next/image'

export default function PoolPassesApp() {
  return (
    <main className={styles.main}>
      <div className={styles.details}>
        <div>
          <h1>Pool Passes App</h1>
          <p>A contacts management system purpose built to digitize the process of verifying season passes for my local public pool.</p>
          <p>When I first moved out to rural Saskatchewan, I worked as a lifeguard at the outdoor pool during the summer. The town provided a service of selling season passes, so that patrons could make a one time payment for unlimited access to the facility for the duration of the season. </p>

          <p>At the time, the record of these season pass holders was written out as plain text, then printed and given to the pool staff. This made the process of verifying a pass holder extremely tedious, and added complications as new patrons purchased passes later in the season. with my skills in programming, I sought to digitize this system to streamline the process of verifying and managing pass holders.</p>

          <h2>Features</h2>

          <p>New pass holders can be added with the push of a button, allowing staff to enter their name, contact information and pass type. To verify pass holders, staff need only to begin typing in part of a patrons name or phone number, and the list will shrink to show the possible matches. This made it much easier to quickly find a patron on the list and let them through without needing to memorize names and faces.</p>

          <p>Staff can also sort the list by first name, last name, or pass type.</p>

          <p>On the settings page, staff can enable the ability to edit and delete entries. Having these features enabled from a separate page eliminated the risk of accidental deletion. From the settings page, staff can also delete all entries to start fresh at the beginning of a new season.</p>
        </div>
        <div>
          <h2>Tech Stack</h2>
          <p>The Pool Passes App is built using React typescript and SASS. It uses local storage as its database and is packaged as a desktop application using Electron.</p>

          <h2>final notes:</h2>
          <p>Pool Passes App was a fun quick project to do that had immediate utility for the pool staff.</p>
          <p>As my first Typescript project, I learned the basics of type safety and using interface declarations. I also took advantage of React Context and custom hooks to make development more streamlined</p>
          <p>All in all, building Pool Passes App was a great opportunity to learn some more technologies and provide value to my community!</p>

          <h2>links:</h2>
          <div className={styles.links}>
            <a target='_blank' rel='noopener noreferrer' href="https://github.com/Jonah-Hansen/pool-passes-app">Source</a>
          </div>
        </div>
      </div>
      <div className={styles.screenshots}>
        <div className={styles.image}><Image src={'/images/projects/poolpassesapp.jpg'} fill alt='everyday todo screenshot' /> </div>
      </div>
    </main>
  )
}