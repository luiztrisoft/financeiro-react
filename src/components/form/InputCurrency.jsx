import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {InputNumber} from 'primereact/inputnumber'
import {changeValor} from '../../store/actions/ContaAction';

class Input extends Component {

    constructor() {
        super();
        this.state = {}
    }

    handleValor = (ev) => {
        let valor = ev && ev.value ? ev.value : 0;
        this.props.changeValor(valor, this.props.id)
    }

    render() {
        const { id, value } = this.props
        return (
            <div className={`p-col-12 p-lg-${this.props.cols ? this.props.cols : 12}`}>
                <strong>{this.props.label}</strong>
                <InputNumber
                    id={id}
                    value={value}                    
                    onChange={this.handleValor}
                    minFractionDigits={2} 
                    maxFracionDigits={2}
                    mode="currency" 
                    currency="BRL"                     
                    locale="pt-BR"  
                    tooltip="Valor"    
                    // readOnly
                    // disabled
                    required

                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeValor,
}, dispatch)

export default connect(null, mapDispatchToProps)(Input);

// https://primefaces.org/primereact/showcase/#/inputnumber