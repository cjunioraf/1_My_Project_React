import { useState } from "react"

function EventoForm(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("cadastrar usuário evento")
    }

    const[name, setname] = useState()
    //const[name, setname] = useState("clecio") <- usa para setar o valor do VALUE="clecio" 
    const[password, setpassword] = useState()

    return(
        <div>
            <h1>Clique p/ Evento</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>   
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                           id="name" 
                           name="name" 
                           placeholder="Digite o seu nome."
                           onChange={(e) => setname(e.target.value)} >                                                                                  
                    </input>
                </div>

                <div>                       
                <label htmlFor="password">Senha:</label>
                    <input type="password" 
                           id="password" 
                           name="password"
                           onChange={(e) => setpassword(e.target.value)} 
                           placeholder="Digite a sua senha.">                                                   
                    </input>
                </div>

                <div>   
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>        
    )       
}

export default EventoForm