import { Link } from 'react-router-dom'
import style from './Linkbutton.module.css'

function Linkbutton({to, text})
{        
    return(        
        <Link className={style.btn} to={to}>
            {text}
        </Link>
    )       
}

export default Linkbutton