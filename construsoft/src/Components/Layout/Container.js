import style from './Container.module.css'

function Container(props)
{        
    //${style.container}  EXECUTANDO JAVASCRIPT 
    return (
        <div className={`${style.container} ${style[props.customClass]}`}>
            {props.children}
        </div>      
    )            
}   

export default Container