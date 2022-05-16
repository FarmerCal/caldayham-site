import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import smilesShoulders from '../assets/IMG-6509.JPG';
import coolBois from '../assets/IMG-6507.JPG';
import beachStand from '../assets/IMG-6510.PNG';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cal's Site</title>
        <meta name="description" content="a site about cal day ham" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the initial commit of Cal's site!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>this site is build statically for now with Next.js!</code>
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Learn about me, my passions, stories, pets, family, and most things in between!</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>See detailed archives of some of my favorite endevours! Projects, jobs, adventures, etc!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h2>Thoughts &rarr;</h2>
            <p>I think I have some perspectives worth sharing, this is sort of like a blog for hot takes!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              See the best ways to get in contact with Cal based on your motivations, be careful!
            </p>
          </a>
        </div>

        <hr className='solid' />
        
        <div className={styles.grid}>
<Image
          src={smilesShoulders}
          width='200'
            height='350'
        />
<Image
          src={coolBois}
          width='200'
          height='350'
        />
<Image
          src={beachStand}
          width='200'
          height='350'
        />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/caldayham/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Provided by Cal
        </a>
      </footer>
    </div>
  )
}
