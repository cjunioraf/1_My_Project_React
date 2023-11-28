import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitBtn from '../Form/SubmitBtn'
import style from './ProjetoForm.module.css'

function ProjetoForm({btntext})
{        
    return(
        <form className={style.form}>
            {/* COMPONENTE Input*/}
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="Orçamento do Projeto R$" name="budget" placeholder="Insira o orçamento total do projeto"/>
            <Select text="Selecione uma categoria" name="category_id"/>
            <SubmitBtn text={btntext}/>      
        </form>
    )       
}

export default ProjetoForm