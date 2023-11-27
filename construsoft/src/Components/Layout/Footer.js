import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './Footer.module.css'

function Footer()
{        
    return (

        <footer className={style.footer}>

            <ul className={style.list_footer}>
                <li><FaFacebook/></li>                
                <li><FaInstagram/></li>                
                <li><FaLinkedin/></li>
            </ul>   
            
            <p className={style.copy_right}><span>ConstruSoft </span>&copy; 2023/CAFEJ</p>

        </footer>
    ) 
}

export default Footer