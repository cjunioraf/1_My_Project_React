import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer()
{        
    return (

        <footer className={styles.footer}>

            <ul className={styles.list_footer}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin/></li>
            </ul>   
            
            <p className={styles.copy_right}><span>ConstruSoft </span>&copy; 2023/CAFEJ</p>

        </footer>
    ) 
}

export default Footer