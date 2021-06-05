import {
    CHANGE_CONTA,
    CLEAN_CONTA,
    LIST_CONTAS,
    LOAD_CONTA,
    TOTAL_CONTAS
} from '../actions/ContaAction'

// id: undefined,
// tipoConta: "receita",
// categoria: "SERVICOS",
// descricao: "DESC",
// valor: 1000.99,
// dataVencimento: new Date(2022, 8, 19),
// dataPagamento: new Date()

const INITIAL_STATE = {
    conta: {
        id: undefined,
        tipoConta: "despesa",
        categoria: undefined,
        descricao: "",
        valor: 0,
        dataVencimento: undefined,
        dataPagamento: undefined
    },
    listaContas: [],
    numero: 0,
    totalDespesas: 0,
    totalReceitas: 0
}

export const ContaReducer = (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case CHANGE_CONTA:
            return {
                ...state,
                conta: {
                    ...state.conta,
                    [action.id]: action.payload
                }
            };

        case CLEAN_CONTA:
            return {
                ...state, 
                conta: INITIAL_STATE.conta
            }

        case LIST_CONTAS:            
            return {
                ...state,
                listaContas: action.payload.data
            }

        case LOAD_CONTA:
            return {
                ...state,
                conta: action.payload
            }
        case TOTAL_CONTAS:
            return {
                ...state,
                totalDespesas: action.totalDespesas,
                totalReceitas: action.totalReceitas
            }
    
        default:
            return state;
    }
}

