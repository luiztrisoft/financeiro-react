import { baseURL } from '../../services/domain'
import axios from 'axios';

const BASE_ACTION = 'conta'

export const CHANGE_CONTA = BASE_ACTION + '/CHANGE_CONTA';
export const CLEAN_CONTA = BASE_ACTION + '/CLEAN_CONTA';
export const LIST_CONTAS = BASE_ACTION + '/LIST_CONTAS';
export const LOAD_CONTA = BASE_ACTION + '/LOAD_CONTA';
export const TOTAL_CONTAS = BASE_ACTION + '/TOTAL_CONTAS';

/**
 * @param ev 
 * Function que altera o estado dos campos do cadastro de conta
 */
export function changeConta(ev) {
    return {
        type: CHANGE_CONTA,
        payload: ev.target.value,
        id: ev.target.id
    }
};

export function changeValor(valor, id) {
    console.log('VALOR=>',valor)
    return {
        type: CHANGE_CONTA,
        payload: valor,
        id: id
    }
};

/** 
 * Arrow function que limpa o formulário do cadastro de conta
 */
export const cleanConta = () => ({ type: CLEAN_CONTA });

/**
 * Busca contas passando pelo reducer. 
 * Obs.: Necessário a configuração do redux-thunk na Store/rootReducer
 */
export function fetchContasReducer() {
    return async (dispatch) => {
        let request = await axios.get(`${baseURL}/conta`);

        dispatch({
            type: LIST_CONTAS,
            payload: request
        })
    }
}

/**
 * Busca contas sem passar pelo reducer
 */
export const fetchContas = async () => {
    try {
        const { data } = await axios.get(`${baseURL}/conta`);
        return data;
    } catch (error) {
        return error;
    }
};

export const loadConta = (conta) => {
    return{
        type: LOAD_CONTA,
        payload: conta
    }
}

export function obterTotalContas() {
    return async (dispatch) => {
        let request = await axios.get(`${baseURL}/conta`);

        let despesas = request.data
            .filter(d => d.tipoConta === "despesa")
            .map(d => d.valor)
            .reduce((acc, el) => acc = acc + el)

        let receitas = request.data
            .filter(d => d.tipoConta === "receita")
            .map(d => d.valor)
            .reduce((acc, el) => acc = acc + el)

        dispatch({
            type: TOTAL_CONTAS,
            totalDespesas: despesas ? despesas : 99,
            totalReceitas: receitas ? receitas : 99
        })
    }
       
        // let despesas = d
        //     .filter(d => d.tipoConta === "despesa")
        //     .map(d => d.valor)
        //     .reduce((acc, el) => acc = acc + el)

        //     return {
        //         type: TOTAL_CONTAS,
        //         totalDespesas: 900
        //     }    
    // });

}
