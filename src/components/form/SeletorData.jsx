import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';

class SeletorData extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
            monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
        };

        const { id, value, onChange, showTime } = this.props

        return (
            <div className={`p-col-12 p-lg-${this.props.cols ? this.props.cols : 12}`}>
                <strong>{this.props.label}</strong>
                <Calendar
                    id={id}
                    value={value}
                    onChange={onChange}
                    dateFormat={this.props.dateFormat ? this.props.dateFormat : "dd/mm/yy"}
                    showTime={showTime ? showTime : undefined}
                // locale={es}
                />
            </div>
        )
    }
}
export default SeletorData;