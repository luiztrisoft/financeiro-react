import React, { Component } from 'react';
import { RadioButton } from 'primereact/radiobutton';

class TipoConta extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        const { onChange } = this.props
        return (
            <div className={`p-col-12 p-lg-${this.props.cols ? this.props.cols : 12}`}>
                <strong>Tipo de conta</strong>
                <div className="p-col-12 p-lg-12">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <RadioButton
                                id="tipoConta"
                                value="despesa"
                                inputId="rb1"
                                onChange={onChange}
                                checked={this.props.tipoContaSelecionada === "despesa"} />
                            <label htmlFor="rb1" className="p-radiobutton-label"> Despesa</label>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <RadioButton
                                id="tipoConta"
                                value="receita"
                                inputId="rb2"
                                onChange={onChange}
                                checked={this.props.tipoContaSelecionada === "receita"} />
                            <label htmlFor="rb2" className="p-radiobutton-label"> Receita</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TipoConta;