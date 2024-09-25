
import styles from './About.module.css'
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/components/button.min.css';

import console from '../../assets/images/about/console.png'
import guide from '../../assets/images/about/guide.png'
import review from '../../assets/images/about/review.png'
import news from '../../assets/images/about/news.png'




const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainh1}> THE HEART OF COMPETITIVE GAMING</h1>
          <h3 className={styles.subh1}> Deep Dives into Esports, Game Guides, and More</h3>
        </div>
      </div>
      <div className={styles.overviewContainer}>
        <h1>WHAT WE DO</h1>
        <div className={styles.pointsContainer}>

          <div className={styles.pointCont}>
            <h2>Latest Gaming News</h2>
            <Image src={news} className={styles.pointIcon} />
            <p>Stay updated with the most recent developments, releases, and trends in the gaming world.</p>
          </div>

          <div className={styles.pointCont}>
            <h2>Comprehensive Game Guides</h2>
            <Image src={guide} className={styles.pointIcon} />
            <p>Enhance your gameplay with detailed guides, tips, and walkthroughs for your favorite games.</p>
          </div>

          <div className={styles.pointCont}>
            <h2>In-Depth Esports Coverage</h2>
            <Image src={review} className={styles.pointIcon} />
            <p>Get the scoop on major tournaments, team performances, and player highlights from the competitive gaming scene.</p>
          </div>

          <div className={styles.pointCont}>
            <h2>Expert Reviews & Insights</h2>
            <Image src={console} className={styles.pointIcon} />
            <p>Read expert reviews and insightful articles that help you make informed decisions on games and gaming gear.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default About
