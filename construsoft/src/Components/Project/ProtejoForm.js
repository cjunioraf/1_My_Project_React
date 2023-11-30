import {useEffect, useState} from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitBtn from '../Form/SubmitBtn'
import style from './ProjetoForm.module.css'

function ProjetoForm({handleSubmit, btntext, projectData})
{        
    const[categories, setCategories] = useState([])
    const[projectForm, setprojectForm] = useState(projectData || {})
    
    useEffect(() => 
    {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers:{'Content-type': 'application/json'}
        }).then((resp) => resp.json())
          .then((data) => {setCategories(data)})  
          .catch(err => console.log(err))
    }, [])  
    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projectForm)
    }

    function handleChange(e) {
        setprojectForm({...projectForm, [e.target.name]: e.target.value})                
    }

    function handleCategory(e) {
        setprojectForm({...projectForm, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text } 
        })                 
    }

    return(
        <form onSubmit={submit} className={style.form}>
            {/* COMPONENTE Input*/}
            <Input type="text" 
                   text="Nome do Projeto" 
                   name="name" 
                   placeholder="Insira o nome do projeto"
                   handleOnChange = {handleChange}
                   value= {projectForm.name ? projectForm.name : ''}
            />
            <Input type="number" 
                   text="Orçamento Total do Projeto R$" 
                   name="budget" 
                   placeholder="Insira o orçamento total do projeto"
                   handleOnChange = {handleChange}
                   value= {projectForm.budget ? projectForm.budget : ''}
            />
            <Select text="Selecione uma Etapa" 
                    options={categories} 
                    name="category_id"
                    handleOnChange = {handleCategory}
                    value={ projectForm.category ? projectForm.category.id : ''}
            />

            <SubmitBtn text={btntext}/>      
            
        </form>
    )       
}

export default ProjetoForm