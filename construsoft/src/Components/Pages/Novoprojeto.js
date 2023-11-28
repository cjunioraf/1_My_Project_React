import ProjetoForm from '../Project/ProtejoForm'
import style from './Novoprojeto.module.css'

function Novoprojeto()
{        
    return(
        <div className= {style.novoprojeto_container}>
            <h1>Criar Projeto</h1>   
            <p>Crie o projeto para depois adicionar materiais e serviços.</p>   
            <ProjetoForm btntext="Criar Projeto"/>                   
        </div>        
    )       
}

export default Novoprojeto