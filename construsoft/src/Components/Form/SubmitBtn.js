import style from './SubmitBtn.module.css'

//handleOnChange - para manipular as informações do input 
function SubmitBtn({text})
{        
    return(
        <div>
            <button className={style.btn}>{text}</button>
        </div>        
    )       
}

export default SubmitBtn