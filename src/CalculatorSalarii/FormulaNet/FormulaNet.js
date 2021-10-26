import React from 'react';

import classes from './FormulaNet.module.css';

function FormulaNet(props) {
    return (
        <div className={classes.tableNet}>
            <table>
                <thead>
                    <tr>
                        <th>Calculator Salariu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Salariu Brut </td>
                        <td> {props.salariuBrut} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormulaNet;