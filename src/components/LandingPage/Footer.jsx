
import styles from './Footer.module.css'
import logo from '../../assets/images/logo.png'
import { Image } from 'semantic-ui-react'
const Footer = () => {
  return (

    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>

        <div className={styles.imageContainer}>
          <Image src={logo} className={styles.logo} />
        </div>

        <div className={styles.sourceContainer}>
          <h3>SOURCES</h3>
          <div className={styles.linkContainer}>
            <a href='https://dotesports.com/' target='_blank'>Dot Esports</a>
            <a href='https://tiebreakertimes.com.ph/' target='_blank'>Tiebreaker Times</a>
            <a href='https://esportsinsider.com/' target='_blank'>Esports Insider</a>
          </div>
        </div>

        <div className={styles.contactsContainer}>
          <h3>CONTACTS</h3>
          <h5>info@nexplaynexus.com</h5>
          <h5>news@nexplaynexus.com</h5>
        </div>
      </div>
      <hr></hr>
      <h6>&copy;2024 NexplayNexus - All Rights Reserved.</h6>
    </div>

  )
}

export default Footer
