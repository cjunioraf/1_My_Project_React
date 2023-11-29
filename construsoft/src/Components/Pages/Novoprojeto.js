import { useNavigate } from 'react-router-dom'
import ProjetoForm from '../Project/ProtejoForm'
import style from './Novoprojeto.module.css'

function Novoprojeto()
{        
    const navigate = useNavigate()

    function createPost(project){        
        //inicialização do projeto 
        project.custo = 0
        project.etapas = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(project)
            }).then((resp) => resp.json())
              .then((data) => {                
                const statusMessage = 'Projeto criado com sucesso!'
                navigate('/projeto', { state: { message: statusMessage } }) 
              })  
              .catch(err => console.log(err))
    }

    return(
        <div className= {style.novoprojeto_container}>
            <h1>Criar Projeto</h1>   
            <p>Crie o projeto para depois adicionar materiais e serviços.</p>   
            <ProjetoForm handleSubmit={createPost} btntext="Criar Projeto"/>                   
        </div>        
    )       
}

export default Novoprojeto