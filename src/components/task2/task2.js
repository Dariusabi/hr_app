import React from 'react';

import classes from './task2.module.css';

const Result = (props) => {

    return (
        <div className={classes.result}>
            <table>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>No tax</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, indexArray) => (
                        <tr key={indexArray}>
                            <td>{item.age}</td>
                            <td>{item.name}</td>
                            <td>{item.salary}</td>
                            <td>{item.position}</td>
                            <td>{item.team}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.paysTax === true ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            
        </div>
    )
};

export default Result;