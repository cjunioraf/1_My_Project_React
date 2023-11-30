import style from './Home.module.css'
import imagem from '../../img/Contruir.jpg'
import Linkbutton from '../Layout/Linkbutton'

function Home()
{        
    return(
        <section className={style.home_container}>
            <h1>Bem vindo ao <span>ConstruSoft</span> </h1>
            <p>Comece a gerenciar seu projeto de construção ou reforma.</p>
            <Linkbutton to="/novoprojeto" text="Criar Projeto (1)"/>
            <img src={imagem} alt='ConstruSoft'></img>
        </section>
    )        
}

export default Home