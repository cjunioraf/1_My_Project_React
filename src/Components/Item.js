
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){

    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>        
    )      

}
//para efetuar validações pelo tipo de dados no react / isRequired é para requerer o dado.
Item.prototype = {
    marca: PropTypes.string,
    //marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}

export default Item