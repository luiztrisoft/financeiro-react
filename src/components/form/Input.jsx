import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

class Input extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        const { id, value, onChange } = this.props
        return (
            <div className={`p-col-12 p-lg-${this.props.cols ? this.props.cols : 12}`}>
                <strong>{this.props.label}</strong>
                <InputText
                    id={id}
                    value={value}
                    onChange={onChange}                    
                    // autoWidth={false}
                />
            </div>
        )
    }
}
export default Input;