import styles from './ProjetoCard.module.css' 
//importar os ícones do react 
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function ProjetoCard({id, name, budget, category, handleRemove})
{   
    
    const auxId = ("id" + category.id)
    //console.log(auxId)
    const categoryName = category.name
    
    return(

        <div className={styles.project_card}>
        
            <h4>{name}</h4>            
            <p><span>Orçamento: </span>R$ {budget}</p>                        
            <p className={styles.category_text}><span className={`${styles[auxId]}`}></span>{categoryName}</p>
            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil/> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        
        </div>        
    )       
}

export default ProjetoCard