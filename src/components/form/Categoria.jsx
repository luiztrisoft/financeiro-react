import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';

class Categoria extends Component {

    constructor() {
        super();
        this.state = {
            categoriaSelecionada: { label: 'Salário', value: 'SALARIO' },
            categorias: [
                { label: 'Selecione a categoria', value: null },
                { label: 'Outros', value: 'OUTROS' },
                { label: 'Salário', value: 'SALARIO' },
                { label: 'Serviços', value: 'SERVICOS' },
                { label: 'Supermercado', value: 'SUPERMERCADO' }
            ],
            tipoConta: 'despesa'
        }

    }

    render() {
        return (
            <div className={`p-col-12 p-lg-${this.props.cols ? this.props.cols : 12}`}>
                <strong>Categoria</strong>
                <Dropdown
                    id={this.props.id}
                    value={this.props.categoriaSelecionada}
                    onChange={this.props.onChange}
                    options={this.state.categorias}
                    autoWidth={false} />
            </div>
        )
    }
}
export default Categoria;