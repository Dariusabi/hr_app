import React from 'react';

import classes from './task2.module.css';

const Result = (props) => {

    return (
        <div className={classes.result}>
            <table>
                <thead>
                    <tr>
                        <th>Ani vechime</th>
                        <th>Nume</th>
                        <th>Salariu</th>
                        <th>Functie</th>
                        <th>Echipa</th>
                        <th>Telefon</th>
                        <th>Email</th>
                        <th>Scutit de impozit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, indexArray) => (
                        <tr key={indexArray}>
                            <td>{item.vechime}</td>
                            <td>{item.nume}</td>
                            <td>{item.salariu}</td>
                            <td>{item.functie}</td>
                            <td>{item.echipa}</td>
                            <td>{item.telefon}</td>
                            <td>{item.email}</td>
                            <td>{item.impozit === true ? "Da" : "Nu"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            
        </div>
    )
};

export default Result;