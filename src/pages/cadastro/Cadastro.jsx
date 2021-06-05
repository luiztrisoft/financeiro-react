import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Axios from 'axios';

import { Button } from 'primereact/button';
import TipoConta from '../../components/form/TipoConta';
import Categoria from '../../components/form/Categoria';
import Input from '../../components/form/Input';
import InputCurrency from '../../components/form/InputCurrency';
import SeletorData from '../../components/form/SeletorData';
import Header from '../../components/form/header/Header';
import ComponenteValidacao from '../../components/ComponenteValidacao';
import {baseURL} from '../../services/domain'

import {successMessage, errorMessage} from '../../components/SwalMessage'
import {
    changeConta,
    changeValor,
    cleanConta
} from '../../store/actions/ContaAction';
import { Link } from 'react-router-dom';

class Cadastro extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount(){
       // console.log('PROPS', this.props)
    }

    changeConta = (ev) => this.props.changeConta({ 'id': ev.target.id, 'value': ev.target.value })

    validation = () => {
        let erros = 0

        if (erros === 0) {
            this.submit();
        }
    }

    submit = () => {
        console.log(this.props.conta)
        if(!this.props.conta.id){        
            Axios.post(baseURL + "/conta", this.props.conta)
                .then(() => this.props.cleanConta())
                .then(() => {
                    successMessage('Conta salva com sucesso')    ;                           
                })
                .catch(error => {
                    errorMessage('Erro ao cadastrar conta');                
                })
        }else{
            Axios.patch(`${baseURL}/conta/${this.props.conta.id}`, this.props.conta)
            .then(() => this.props.cleanConta())
            .then(() => {
                successMessage('Conta alterada com sucesso')    ;                           
            })
            .catch(error => {
                console.log(error)
                errorMessage('Erro ao alterar conta');                
            })
        }
    }

    render() {
        const { conta } = this.props;

        // console.log('PROPS', this.props)
        return (
            <div className="p-grid p-fluid">

                <Header label={`Cadastro de contas`} />

                {/* <ComponenteValidacao conta={this.props.conta} /> */}
                <div className="p-col-12 p-lg-12">
                    <TipoConta
                        id="tipoConta"
                        cols="6"
                        tipoContaSelecionada={conta.tipoConta}
                        onChange={this.props.changeConta} />

                    <Categoria
                        id="categoria"
                        cols="4"
                        categoriaSelecionada={conta.categoria}
                        onChange={this.props.changeConta} />

                    <Input
                        id="descricao"
                        cols="6"
                        label="Descrição"
                        value={conta.descricao}
                        onChange={this.props.changeConta}                         
                        />

                    {/* <Input
                        id="valor"
                        cols="2"
                        label="Valor"
                        value={conta.valor}
                        onChange={this.props.changeValor}
                        type="number"
                        /> */}

                    <InputCurrency
                       id="valor"
                       cols="2"
                       label="Valor"
                       value={conta.valor}
                    //    onChange={this.props.changeValor}
                       type="number"
                        />

                    <SeletorData
                        id="dataVencimento"
                        cols="2"
                        label="Data de vencimento"
                        value={conta.dataVencimento}
                        onChange={this.props.changeConta} />

                    <SeletorData
                        id="dataPagamento"
                        label="Data de pagamento"
                        value={conta.dataPagamento}
                        cols="2"
                        onChange={this.props.changeConta}
                        //showTime 
                        />

                    <div className="p-col-12 p-lg-12">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-3">
                                <Button
                                    onClick={this.validation}
                                    label="Salvar"
                                    style={{ marginBottom: '10px' }}
                                    className="p-button-success" />
                            </div>                           
                            <div className="p-col-12 p-md-3">
                                <Button
                                    onClick={this.props.cleanConta}
                                    label="Cancelar"
                                    style={{ marginBottom: '10px' }}
                                    className="p-button-danger" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Button
                                    onClick={this.props.cleanConta}
                                    label="Limpar"
                                    style={{ marginBottom: '10px' }}
                                    className="p-button-info" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Link to="/consulta">
                                    <Button
                                        label="Consulta"
                                        style={{ marginBottom: '10px' }}
                                        className="p-button-info" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    conta: store.contaReducer.conta,
    totalReceitas: store.contaReducer.totalReceitas
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeConta,
    changeValor,
    cleanConta
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);