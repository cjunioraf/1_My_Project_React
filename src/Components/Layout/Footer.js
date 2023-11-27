import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './Footer.module.css'

function Footer()
{        
    return (

        <footer>

            <ul className={style.list_footer}>
                <li className={style.item_footer}><FaFacebook/></li>
                <li className={style.item_footer}><FaInstagram/></li>
                <li className={style.item_footer}><FaLinkedin/></li>
            </ul>   
            
        </footer>
    ) 
}

export default Footer