import styles from './Projeto.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from "react"
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'

function Projeto()
{        
    const { id } = useParams() 
    const [project, setProject] = useState([])
    const [showProjetoForm, setShowProjetoForm] = useState(false)

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

    function toggleProjetoForm(){
        setShowProjetoForm(!showProjetoForm)    
    }

    return(
        <>
            {project.name ? (

                <div>
                    <Container customClass="column">
                        
                        <div>
                            <h1>Projeto: {project.name} </h1>
                            
                            <button onClick={toggleProjetoForm}> 
                                {!showProjetoForm ? 'Editar Projeto' : 'Fechar' } 
                            </button>

                            {!showProjetoForm ? 
                            (
                                <div>
                                    <p><span>Etapa:</span> {project.category.name}</p> 
                                    <p><span>Total Orçamento:</span> R${project.budget}</p> 
                                    <p><span>Total Utilizado:</span> R${project.custo}</p>
                                </div>                                   

                            ) : (
                                <div>
                                    <p>Detalhes do projeto</p>                                           
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