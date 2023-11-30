import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import ProjetoForm from '../Project/ProtejoForm'
import Message from '../Layout/Message'
import ServiceForm from '../Service/ServiceForm'
import {v4 as uuidv4} from 'uuid'
import ServiceCard from '../Service/ServiceCard'

function Projeto()
{        
    const { id } = useParams() 
    const [project, setProject] = useState([])
    const [etapas, setEtapas] = useState([])
    const [showProjetoForm, setShowProjetoForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState('')
    const [typemsg, setTypemsg] = useState('')

    useEffect(() => {

        setTimeout(() => {
            
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers:{'Content-type': 'application/json'}            
            } ).then((resp) => resp.json())
               .then((data) => {            
                    setProject(data)
                    setEtapas(data.etapas) 
                })  
                .catch(err => console.log(err))

        }, 300);          

    }, [id])
    //projectForm é o objeto alterado que vem do (ProjetoForm handleSubmit={editPost}) LINHA 89 
    function editPost(projectForm){

        const id = projectForm.id            
        setMessage('')
        
        if(projectForm.budget <= 0 ){
            setMessage("Valor total do Orçamento deve ser maior que 0 (zero)!")
            setTypemsg("error")            
            return false                
        }
        //VERIFICA SE O TOTAL DO ORÇAMENTO NÃO É MENOR QUE O CUSTO TOTAL.
        if(projectForm.budget < projectForm.custo){
            //COLOCAR MENSAGEM 
            setMessage("Valor do custo ultrapassou o valor total do Orçamento!")
            setTypemsg("error")            
            return false
        }   

        fetch(`http://localhost:5000/projects/${id}`, {       
             //PATCH - SÓ ATUALIZA O QUE EU MANDAR DIFERENTE 
             method: 'PATCH',
             headers:{'Content-type': 'application/json'},
             //body envia para o JSON alterar meu arquivo db.json
             body: JSON.stringify(projectForm)
        }).then((resp) => resp.json())
          .then((data) => {                                
                setProject(data)
                setShowProjetoForm(false)              
                setMessage("Projeto alterado com sucesso!")    
                setTypemsg("success") 
          })  
          .catch(err => console.log(err))
    } 

    function createService(projectData){

        setMessage('')        
        const lastEtapa = projectData.etapas[projectData.etapas.length - 1]
        lastEtapa.id = uuidv4()
        const lastEtapaCusto = lastEtapa.custo        
        //console.log('custo do serviço atual -> ' + lastEtapaCusto)
        const newCusto = parseFloat(projectData.custo) + parseFloat(lastEtapaCusto)        
        //console.log('Total Orçamento' + projectData.budget)

        if(newCusto > parseFloat(projectData.budget))
        {
            setMessage("Orçamento foi ultrapassado!")
            setTypemsg("error")            
            projectData.etapas.pop()
            return false                
        } 

        projectData.custo = newCusto

        fetch(`http://localhost:5000/projects/${projectData.id}`, {       
            //PATCH - SÓ ATUALIZA O QUE EU MANDAR DIFERENTE 
            method: 'PATCH',
            headers:{'Content-type': 'application/json'},
            //body envia para o JSON alterar meu arquivo db.json        
            body: JSON.stringify(projectData)               

        }).then((resp) => resp.json())
          .then((data) => { 
            console.log(data)
               //setProject(data)
               //setShowProjetoForm(false)              
               //setMessage("Projeto alterado com sucesso!")    
               //setTypemsg("success") 
         })  
         .catch(err => console.log(err))
    }    

    function toggleProjetoForm(){
        setShowProjetoForm(!showProjetoForm)    
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)    
    }

    function removeEtapa(){
        console.log("Remover a etapa") 
    }

    return(
        <>
            {project.name ? (

                <div className={styles.project_details}>

                    <Container customClass="column">
                        
                        {message && (<Message type={typemsg} msg={message}/> )}                       

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
                                    <ProjetoForm handleSubmit={editPost} btntext="Salvar Projeto" projectData={project}/>                                        
                                </div>
                            )} 

                        </div>

                        <div className={styles.service_form_container}>
                            
                            <h2>Adicione um serviço</h2>      

                            <button className={styles.btn} onClick={toggleServiceForm}> 
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar' } 
                            </button> 

                            {showServiceForm && 
                            (
                                <div className={styles.project_info}>                                      
                                    <ServiceForm handleSubmit={createService} btntext="Adicionar Serviço" projectData={project} />                               
                                </div>                                   
                            )}                                                                                              

                        </div>

                        <h2>Serviços</h2>
                        
                        <Container customClass="start">
                            {etapas.length > 0 && 
                                
                                etapas.map((etapa) => (
                                    <ServiceCard     
                                        name={etapa.name} 
                                        id={etapa.id} 
                                        custo={etapa.custo} 
                                        description={etapa.description}
                                        key={etapa.id} 
                                        handleRemove={removeEtapa}/>                                            
                                ))    
                            }                           
                            {etapas.length === 0 && <p>Sem serviço cadastrado.</p>}
                        </Container> 

                    </Container>

                </div>                         
            )    
            : (<Loading />)}                       
        </>
    )       
}

export default Projeto