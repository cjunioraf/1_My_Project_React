import style from '../Project/ProjetoCard.module.css'

function ServiceCard({id, name, custo, description, handleRemove})
{        
    return(
        <div className={style.project_card}>
            <h4>{name}</h4>               
        </div>        
    )       
}

export default ServiceCard