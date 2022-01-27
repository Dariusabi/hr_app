import React from 'react';

import classes from './FormulaBrut.module.css';

function FormulaBrut(props) {
    return (
        <div className={classes.tableBrut}>
            <table classes={classes.brut}>
                <thead>
                    <tr>
                        <th>Salary Calculator</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Social Security</td>
                        <td>25%</td>
                        <td> {props.cas} </td>
                    </tr>
                    <tr>
                        <td>Social Health Insurance</td>
                        <td>10%</td>
                        <td> {props.cass} </td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{props.impozitBrut}</td>
                        <td> {props.impozit} </td>
                    </tr>
                    <tr>
                        <td>Net Salary</td>
                        <td></td>
                        <td>{props.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormulaBrut;
