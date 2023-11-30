import styles from '../Project/ProjetoCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function ServiceCard({id, name, custo, description, handleRemove})
{   
    
    const remove = (e) => {
        e.preventDefault()
        //handleRemove(id)
    }

    return(
        // <div className={style.project_card}>
        //     <h4>{name}</h4>    
        //     <p><span>Custo Total</span>R${custo}</p> 
        //     <p>{description}</p>  
        // </div>        
        <div className={styles.project_card}>
        
            <h4>{name}</h4>            
            <p><span>Custo Total:</span>R$ {custo}</p>                        
            <p>{description}</p> 
            <div className={styles.project_card_actions}>
                <Link to={`/projeto/${id}`} >
                    <BsPencil/> Editar
                </Link>
                {/* CHAMA O MÉTODO REMOVE */}
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        
        </div>
    )       
}

export default ServiceCard