import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './Footer.module.css'

function Footer()
{        
    return (

        <footer>

            <ul className={style.list}>
                <li className={style.item}><FaFacebook/></li>
                <li className={style.item}><FaInstagram/></li>
                <li className={style.item}><FaLinkedin/></li>
            </ul>   
            
        </footer>
    ) 
}

export default Footer