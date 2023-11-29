import { useState, useEffect } from "react"
import styles from './Projetos.module.css'
import Message from "../Layout/Message"
//pegar a mensagem que foi gerado pelo navigate lá no Novoprojeto.js 
import { useLocation } from "react-router-dom"
import Container from '../Layout/Container';
import Linkbutton from '../Layout/Linkbutton';
import ProjetoCard from '../Project/ProjetoCard';
import Loading from "../Layout/Loading";

function Projetos()
{        
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMsg, setprojectMsg] = useState('')
    const location = useLocation()

    let statusMessage = ""
    
    if (location.state){
        statusMessage = location.state.message         
    }

    useEffect(() => 
    {
        //3 segundos só para ver em teste o loading 
        setTimeout(() => {
            
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers:{'Content-type': 'application/json'}
            }).then((resp) => resp.json())
              .then((data) => {            
                    setProjects(data)
                    setRemoveLoading(true)
              })  
              .catch(err => console.log(err))

        }, 300) 

    }, [])  
    //função que remove os projetos do db.json
    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers:{'Content-type': 'application/json'}
        }).then((resp) => resp.json())
          .then(() => {            
            setProjects(projects.filter((prj) => prj.id !== id))
            setprojectMsg("Projeto excluído com sucesso!")
            //mostrar uma mensagem
          })  
          .catch(err => console.log(err))
    }
    
    return(
        <div className={styles.project_container}>

            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>                                
                <Linkbutton to="/novoprojeto" text="Criar Projeto"/>            
            </div>
            {/* SE O statusMessage != "" */}
            { statusMessage && <Message msg={statusMessage} type="success"/> }   
            { projectMsg && <Message msg={projectMsg} type="success"/> }
            <Container customClass="start">                
                {projects.length > 0 && (                   
                    projects.map((prj) => <ProjetoCard 
                        name={prj.name} 
                        id={prj.id} 
                        budget={prj.budget}
                        category={prj.category}                         
                        key={prj.id} 
                        handleRemove={removeProject}
                    /> )
                )}

                {!removeLoading && <Loading />}
                {removeLoading && projects.length ===0 && (
                    <p>Não há Projeto cadastrado!</p>
                ) }

            </Container>     
        </div>        
    )       
}

export default Projetos