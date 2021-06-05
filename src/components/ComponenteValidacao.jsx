import React from 'react';
import {formatarData} from '../config/Formatador'

const ComponenteValidacao = (props) => {
    return (
        <div>
            <span><strong>Tipo de conta: </strong>{props.conta.tipoConta}</span><br/>
            <span><strong>Categoria: </strong>{props.conta.categoria}</span><br/>
            <span><strong>Descrição: </strong>{props.conta.descricao}</span><br/>
            <span><strong>Valor: </strong>{props.conta.valor}</span><br/>
            <span><strong>Data de vencimento: </strong>{formatarData(props.conta.dataVencimento)}</span><br/>
            <span><strong>Data de pagamento: </strong>{formatarData(props.conta.dataPagamento)}</span>
            <hr/>
        </div>
    )
}

export default ComponenteValidacao;