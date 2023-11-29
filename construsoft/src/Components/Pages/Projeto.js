import styles from './Projeto.module.css'
import Message from "../Layout/Message"
//pegar a mensagem que foi gerado pelo navigate lá no Novoprojeto.js 
import { useLocation } from "react-router-dom"
import Container from '../Layout/Container';
import Linkbutton from '../Layout/Linkbutton';

function Projeto()
{        
    const location = useLocation()
    //const statusMessage = location.state?.message || 'Mensagem não tratada.';  
    let statusMessage = ""
    
    if (location.state){
        statusMessage = location.state.message         
    }

    return(
        <div className={styles.project_container}>

            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>                                
                <Linkbutton to="/novoprojeto" text="Criar Projeto"/>            
            </div>
            {/* SE O statusMessage != "" */}
            { statusMessage && <Message msg={statusMessage} type="success"/> }       
            <Container customClass="start">
                <p>Projetos....</p>
            </Container>     
        </div>        
    )       
}

export default Projeto