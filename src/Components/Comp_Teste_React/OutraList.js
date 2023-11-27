function OutraList({itens}){
    
    return(
        <>
            <h3>Minha Lista</h3>

            {
                itens.length > 0 ? 
                (                                
                    itens.map((item,index) => (
                        <p key={index}>{item}</p> ))
                ) : (<p> Não hà item na Lista</p>)
            }
        </>        
    )       
}

export default OutraList