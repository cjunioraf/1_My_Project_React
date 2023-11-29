import styles from './ProjetoCard.module.css' 
//importar os ícones do react 
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function ProjetoCard({id, name, budget, category, handleRemove})
{       
    const auxId = ("id" + category.id)
    const categoryName = category.name
    //aqui método remove que ao clic envia o ID para o projeto pai Projeto que por sua vez envia a informação para remover na function removeProject  
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    
    return(

        <div className={styles.project_card}>
        
            <h4>{name}</h4>            
            <p><span>Orçamento: </span>R$ {budget}</p>                        
            <p className={styles.category_text}><span className={`${styles[auxId]}`}></span>{categoryName}</p>
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

export default ProjetoCard