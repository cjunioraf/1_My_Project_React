function Pessoa({imagem, nome, idade, profissao}){
    
    return(
        <div>
            <img src={imagem} alt={nome}></img>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}!</p>            
            <p>Profissão: {profissao}!</p>
        </div>        
    )       
}

export default Pessoa