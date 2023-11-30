import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import ProjetoForm from '../Project/ProtejoForm'
//import { useNavigate } from 'react-router-dom'

function Projeto()
{        
    const { id } = useParams() 
    const [project, setProject] = useState([])
    const [showProjetoForm, setShowProjetoForm] = useState(false)
    //const navigate = useNavigate()

    useEffect(() => {

        setTimeout(() => {
            
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers:{'Content-type': 'application/json'}            
            } ).then((resp) => resp.json())
               .then((data) => {            
                    //console.log(data)  
                    setProject(data)
                })  
                .catch(err => console.log(err))

        }, 300);          

    }, [id])
    //projectForm é o objeto alterado que vem do (ProjetoForm handleSubmit={editPost})
    function editPost(projectForm){

        const id = projectForm.id
        //VERIFICA SE O TOTAL DO ORÇAMENTO NÃO É MENOR QUE O CUSTO TOTAL.    
        if(projectForm.budget < projectForm.custo){
            //COLOCAR MENSAGEM 
        }   

        fetch(`http://localhost:5000/projects/${id}`, {       
             //PATCH - SÓ ATUALIZA O QUE EU MANDAR DIFERENTE 
             method: 'PATCH',
             headers:{'Content-type': 'application/json'},
             //body envia para o JSON alterar meu arquivo db.json
             body: JSON.stringify(projectForm)
        }).then((resp) => resp.json())
          .then((data) => {                
                //const statusMessage = 'Projeto alterado com sucesso!'
                //navigate('/projeto', { state: { message: statusMessage } }) 
                setProject(data)
                setShowProjetoForm(false)               

          })  
          .catch(err => console.log(err))
    } 

    function toggleProjetoForm(){
        setShowProjetoForm(!showProjetoForm)    
    }

    return(
        <>
            {project.name ? (

                <div className={styles.project_details}>

                    <Container customClass="column">
                        
                        <div className={styles.details_container}>

                            <h1>Projeto: {project.name} </h1>
                            
                            <button className={styles.btn} onClick={toggleProjetoForm}> 
                                {!showProjetoForm ? 'Editar Projeto' : 'Fechar' } 
                            </button>

                            {!showProjetoForm ? 
                            (
                                <div className={styles.project_info}>
                                    <p><span>Etapa:</span> {project.category.name}</p> 
                                    <p><span>Total Orçamento:</span> R${project.budget}</p> 
                                    <p><span>Total Utilizado:</span> R${project.custo}</p>
                                </div>                                   

                            ) : (
                                <div className={styles.project_info}>
                                    <ProjetoForm handleSubmit={editPost} btntext="Salvar Projeto" projectData = {project}/>                                        
                                </div>
                            )} 

                        </div>

                    </Container>
                </div>

            )    
            : (<Loading />)}                       
        </>
    )       
}

export default Projeto