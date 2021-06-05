import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import Swal from 'sweetalert2'

import { Column } from 'primereact/column';
import Header from '../../components/form/header/Header';
import Table from '../../components/Table';
import { 
    fetchContasReducer, 
    loadConta,
//    fetchContas 
} from '../../store/actions/ContaAction';
import Button from '../../components/form/Button';
import { formatarData } from '../../config/Formatador';
import Axios from 'axios';
import {baseURL} from '../../services/domain'
import {successMessage, errorMessage, confirmDialog} from '../../components/SwalMessage'

class Consulta extends Component {

    constructor() {
        super();
        this.state = {}
    }

    //Without reducer
    //  async componentDidMount() {         
    //     this.setState({registros: await fetchContas()})        
    //  }

    //With reducer
    componentDidMount() {
        this.props.fetchContasReducer()
    }

    renderDataVencimento = (rowData) => {
        return (
            rowData.dataVencimento ? (
                <Moment format="DD/MM/YYYY">{rowData.dataVencimento}</Moment>
            ) : (
                    undefined
                )
        )
    }

    renderDataPagamento = (rowData) => {
        return (
            rowData.dataPagamento ? (
                <Moment format="DD/MM/YYYY">{rowData.dataPagamento}</Moment>
            ) : (
                    undefined
                )
        )
    }

    colorTemplate = (rowData, column) => {
        let color = rowData.tipoConta === 'receita' ? { color: 'blue' } : { color: 'red' }
        return <span style={color}>{rowData.tipoConta}</span>;
    }

    carregarConta = (rowData) => {
        rowData. dataVencimento = new Date(rowData.dataVencimento)
        rowData.dataPagamento = new Date(rowData.dataPagamento)

        console.log(rowData)
        
        this.props.loadConta(rowData)
        this.props.history.push('/cadastro');
    }

    deletarConta = (rowData)=> {
        console.log('=>', rowData)

        Swal.fire({
            title: "Remover conta selecionada?",
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: `Claro!`,
            denyButtonText: `Melhor não`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Axios.delete(`${baseURL}/conta/${rowData.id}`)
                    .then(() => {
                        successMessage('Conta removida com sucesso');
                        this.props.fetchContasReducer();                    
                    }).catch(error => {errorMessage('Erro ao cadastrar conta');
                })            
            } else if (result.isDenied) {
            //   Swal.fire('Changes are not saved', '', 'info')
            }
          })


        
    }

    renderActionButton = (rowData, column) =>  {
        return <Button icon="search" 
                   // onClick={()=>alert(rowData.id)} 
                    onClick={()=> this.carregarConta(rowData)}
                    color="blue" 
                    style={{marginRight: '.1em'}}
                ></Button>                    
    }

    renderDeleteButton = (rowData) => {
        return <Button icon="trash" 
            color="red" 
            style={{marginRight: '.1em'}}
            onClick={()=> this.deletarConta(rowData)}
        ></Button>                    
    }

    render() {     
        return (
            <div className="p-grid p-fluid">
                <Header label={`Consulta de contas`} />
                <div className="p-col-12 p-lg-12">
                    <Table registros={this.props.listaContas}>
                        <Column field="descricao" header="Descrição" sortable={true} />
                        <Column field="tipoConta" body={this.colorTemplate} header="Tipo" sortable={true} />
                        <Column field="valor" header="Valor" sortable={true} />
                        <Column body={this.renderDataVencimento} field="dataVencimento" header="Vencto" sortable={true} />
                        <Column body={this.renderDataPagamento} field="dataPagamento" header="Pagto" sortable={true} />
                        <Column body={this.renderActionButton} style={{textAlign:'center', width: '5em'}}/> 
                        <Column body={this.renderDeleteButton} style={{textAlign:'center', width: '5em'}}/>                         
                    </Table>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({ listaContas: state.contaReducer.listaContas })

const mapDispatchToProps = dispatch => bindActionCreators({ 
    fetchContasReducer,
    loadConta
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Consulta);