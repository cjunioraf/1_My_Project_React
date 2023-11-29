import { useState, useEffect } from "react"
import styles from './Projeto.module.css'
import Message from "../Layout/Message"
//pegar a mensagem que foi gerado pelo navigate lá no Novoprojeto.js 
import { useLocation } from "react-router-dom"
import Container from '../Layout/Container';
import Linkbutton from '../Layout/Linkbutton';
import ProjetoCard from '../Project/ProjetoCard';

function Projeto()
{        
    const [projects, setProjects] = useState([])
    const location = useLocation()
    //const statusMessage = location.state?.message || 'Mensagem não tratada.';  
    let statusMessage = ""
    
    if (location.state){
        statusMessage = location.state.message         
    }

    useEffect(() => 
    {
        fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers:{'Content-type': 'application/json'}
        }).then((resp) => resp.json())
          .then((data) => {            
            setProjects(data)
           })  
          .catch(err => console.log(err))
    }, [])  
    
    return(
        <div className={styles.project_container}>

            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>                                
                <Linkbutton to="/novoprojeto" text="Criar Projeto"/>            
            </div>
            {/* SE O statusMessage != "" */}
            { statusMessage && <Message msg={statusMessage} type="success"/> }       
            <Container customClass="start">                
                {projects.length > 0 && (
                    projects.map((prj) => <ProjetoCard 
                        name={prj.name} 
                        id={prj.id} 
                        budget={prj.budget}
                        category={prj.category}                         
                        key={prj.id}
                    /> )
                )}

            </Container>     
        </div>        
    )       
}

export default Projeto