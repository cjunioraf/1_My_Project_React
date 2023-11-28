import style from './Select.module.css'

//handleOnChange - para manipular as informações do input 
function Select({text, name, options, handleOnChange, value})
{   
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((opt) => (
                    <option value={opt.id} key={opt.id}>
                        {opt.name}
                    </option>
                ) )}
            </select>
        </div>        
    )       
}

export default Select