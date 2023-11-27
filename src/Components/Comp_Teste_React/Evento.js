import Button from "../Evento_filho/Button"

function Evento(){

    function meuEvento(){
        console.log('Meu evento filho')
    }

    function segundoEvento(){
        console.log('Ativando segundo evento')
    }
    
    return(
        <div>
            <p>Clique p/ Evento</p>
            <Button text="Primeiro evento" event={meuEvento}/> 
            <Button text="Segundo evento" event={segundoEvento}/> 
            {/* <button onClick={meuEvento}>Ativar</button> */}
        </div>        
    )       
}

export default Evento