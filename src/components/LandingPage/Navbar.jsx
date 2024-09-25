
import styles from './Navbar.module.css'
import logo from '../../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
const Navbar = () => {

    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className={styles.navContainer}>
                <Image src={logo} />
                <Link to='/' className={styles.logoNameLinkContainer}>
                    <div className={styles.logoNameContainer}>
                        <h1 className={styles.logoName1} > NEXPLAY </h1>
                        <h1 className={styles.logoName2} > NEXUS </h1>
                    </div>
                </Link>

                <div className={styles.sectionsContainer}>
                    <Link to='/' className={styles.sectionName} onClick={scrollToTop} > <h4  >Home</h4></Link>
                    <Link to='/about' className={styles.sectionName} ><h4>About</h4></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
