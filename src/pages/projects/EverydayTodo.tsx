import styles from '@/styles/ProjectsPages.module.scss'
import Image from 'next/image'

export default function EverydayTodo() {
  return (
    <main className={styles.main}>
      <div className={styles.details}>
        <div>
          <h1>Everyday Todo</h1>
          <p>a joint project between myself and <a href="https://www.linkedin.com/in/waseemkhalo/">Waseem Khalo</a>, Everyday Todo helps you organize your tasks and keep yourself accountable day-to-day.</p>
          <p>Project Everyday began as an idea pitched by Waseem to digitize his own style of personal todo list that he had been tracking on pen and paper for a few months.</p>

          <p> The idea was that on top of being a place to track your day-to-day tasks, we wanted to provide tools to help users keep themselves accountable for working through their tasks.</p>

          <h2>Features</h2>

          <p>The first time you interact with any of your lists on any given day, the current time is recorded for that day, and the day is marked to be saved. you can cycle through previously saved days and see a snapshot of the progress you made that day, and any notes you wrote down.</p>

          <p>The number of days between today and the day you signed up is also recorded, so that as you cycle through previous days, you can tell when you missed a day entirely.</p>

          <p>Each new day, any previously checked off items will be removed, and all &apos;daily&apos; items will be unchecked, giving the user a clean and fresh start. </p>
        </div>
        <div>
          <h2>Tech Stack</h2>
          <p>Everyday Todo is built using React typescript and TailwindCSS. We used Firebase for auth and hosting, and Firestore as our backend database</p>

          <h2>final notes:</h2>
          <p>I had an absolute blast working alongside Waseem! We both learned a ton as TailwindCSS and the entire Firebase ecosystem were new to both of us, and this was Waseem&apos;s first Typescript project.</p>
          <p>While I spent most of my time learning Firestore and setting up the backend services, Waseem focused on the front-end, first designing the side in Figma, then building out components and implementing the backend as I showed him how it all worked. As we approached time to deploy and the backend services were fully functional, I shifted my focus to helping tidy up the front-end, and diagnosing bugs. </p>
          <p>All in all, working on Everyday Todo was an amazing experience, ands we hope to continue development and adding new features as user feedback comes in.</p>

          <h2>links:</h2>
          <div className={styles.links}>
            <a target='_blank' rel='noopener noreferrer' href="https://everydaytodo.com">Live</a>
            <a target='_blank' rel='noopener noreferrer' href="https://github.com/waseemkhalo/everyday-client">Source</a>
          </div>
        </div>
      </div>
      <div className={styles.screenshots}>
        <div className={styles.image}><Image src={'/images/projects/EverydayTodo1.jpg'} fill alt='everyday todo screenshot' /> </div>
        <div className={styles.image}><Image src={'/images/projects/EverydayTodo.jpg'} fill alt='everyday todo screenshot' /> </div>
      </div>
    </main>
  )
}