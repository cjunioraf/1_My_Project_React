import style from './SayMyName.module.css'

function SayMyName(props){

    return(
        
        <div>
            <h1 className={style.frase_h1}>Aqui teste de PROPS</h1>
            <p className={style.frase_p}>Meu nome é {props.nome}!</p>                        
        </div>        
    )      

}

export default SayMyName