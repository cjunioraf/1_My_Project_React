import Button from "./Evento_filho/Button"

import { useState } from "react"

function Condicional(){
    
    const[email, setemail] = useState()
    const[useremail, setuseremail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        //console.log(`Testando = ${email}`)
        setuseremail(email)
    }

    function limparEmail(e){
        //console.log(`Testando = ${email}`)
        setuseremail('')
    }

    return(
        <div>
            <h2>Cadastre seu E-mail:</h2>            
            <form>
                <input type="email" 
                       id="email" 
                       name="email" 
                       placeholder="Digite o seu e-mail."
                       onChange={(e) => setemail(e.target.value)} >                                                                                  
                </input>
            </form>

            <Button text="Enviar-Email" event={enviarEmail}/>

            {useremail && (

                <div>
                    <p>Email do usuário é {useremail}!</p>
                    <Button text="Limpar Email" event={limparEmail}/> 
                </div> 
            )}         

        </div>        
    )       
}

export default Condicional