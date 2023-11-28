import style from './Select.module.css'

//handleOnChange - para manipular as informações do input 
function Select({text, name, options, handleOnChange, value})
{        
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <options>Selecione uma opção</options>
            </select>
        </div>        
    )       
}

export default Select