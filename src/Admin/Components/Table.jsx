import React, {Component} from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";
import { UserService } from "../service/UserService";
const userService = new UserService()

const vcolumns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const vdata = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 5,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 6,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 7,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 8,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function Table(props) {
    // function sest(data) {
    //     // console.log(data);
    //     return userService.MapToTable(data)
    // }
    // d = sest(props.data)
    // console.log(d);
    // dataset = set(props.data)

    return (
        <DataTable
            theme=""
            // fixedHeader="true"
            columns={vcolumns}
            data={vdata}
            // progressPending="true"
            // progressComponent="Cargando datos..."
        />
    );
}
export default Table;