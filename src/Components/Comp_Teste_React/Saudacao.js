function Saudacao({nome}){
    
    function gerarSaudacao(nomeS){
        return `Olá ${nomeS}, precisa de ajuda?` 
    }

    return (
    <>    
        {/* Se tiver nome "nome &&"" */}
        {nome && <p>{gerarSaudacao(nome)}</p>}
    </>)  
}

export default Saudacao