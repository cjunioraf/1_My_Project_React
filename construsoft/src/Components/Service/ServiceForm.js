import {useState} from 'react'
import Input from '../Form/Input'
import style from '../Project/ProjetoForm.module.css' 
import SubmitBtn from '../Form/SubmitBtn'

function ServiceForm({handleSubmit, btntext, projectData})
{
    const[serviceForm, setserviceForm] = useState({})

    function submit(e){
        e.preventDefault()        
        projectData.etapas.push(serviceForm)
        handleSubmit(projectData)
    } 

    function handleChange(e) {
        setserviceForm({...serviceForm, [e.target.name]: e.target.value})
    }

    return(

        <form onSubmit={submit} className={style.form}>

            <Input type="text" 
                   text="Nome do Serviço" 
                   name="name" 
                   placeholder="Insira o nome do serviço..."
                   handleOnChange = {handleChange}                   
            />
            <Input type="number" 
                   text="Valor do Serviço R$" 
                   name="custo" 
                   placeholder="Insira o valor do serviço..."
                   handleOnChange = {handleChange}                   
            />

            <Input type="text" 
                   text="Descrição Serviço" 
                   name="description" 
                   placeholder="Descreva o serviço..."
                   handleOnChange = {handleChange}                   
            />

            <SubmitBtn text={btntext}/> 

        </form>
    )       
}

export default ServiceForm