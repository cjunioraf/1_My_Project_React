import Item from './Item'   
//fragment entrega uma tab sem a DIV, <>/</>
function List(){
    
    return(
        <>
            <h1>Minha Lista H1</h1>
            <ul>
                <Item marca="Audi" ano_lancamento={2010} />
                <Item marca="Fiat" ano_lancamento={2015} />
                <Item marca="VW" ano_lancamento={2000} />
                <Item ano_lancamento={2012}/>
            </ul>    
        </>        
    )       
}

export default List