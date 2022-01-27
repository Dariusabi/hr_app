import React from 'react';

import classes from './FormulaNet.module.css';

function FormulaNet(props) {
    return (
        <div className={classes.tableNet}>
            <table>
                <thead>
                    <tr>
                        <th>Salary Calculator</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gross Salary </td>
                        <td> {props.salariuBrut} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormulaNet;