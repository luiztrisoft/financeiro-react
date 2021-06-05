import React from 'react';
import { DataTable } from 'primereact/datatable';

const Table = (props) => {
    return (
        <DataTable
            value={props.registros}
            style={{ margin: 0, padding: 0 }}
            paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Resultado {first} a {last} de {totalRecords}"
            rows={20}
            rowsPerPageOptions={[5, 10, 20, 50]}
        >
            {props.children}
        </DataTable>
    )
}

export default Table;