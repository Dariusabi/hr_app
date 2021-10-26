import React from 'react';

import classes from './FormulaBrut.module.css';

function FormulaBrut(props) {
    return (
        <div className={classes.tableBrut}>
            <table classes={classes.brut}>
                <thead>
                    <tr>
                        <th>Calculator Salariu</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Asigurari Sociale</td>
                        <td>25%</td>
                        <td> {props.cas} </td>
                    </tr>
                    <tr>
                        <td>Asigurari sociale de Sanatate</td>
                        <td>10%</td>
                        <td> {props.cass} </td>
                    </tr>
                    <tr>
                        <td>Impozitul pe venit</td>
                        <td>{props.impozitBrut}</td>
                        <td> {props.impozit} </td>
                    </tr>
                    <tr>
                        <td>Salariu Net</td>
                        <td></td>
                        <td>{props.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormulaBrut;
