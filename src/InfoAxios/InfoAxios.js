import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './InfoAxios.module.css';

const InfoAxios = () => {

    const [personsList, setPersonsList] = useState([]);

    useEffect(() => {
        axios.get('angajati.json')
            .then((response) => {
                setPersonsList(response.data);
            });
    }, []);


    return (
        <div className={classes.result}>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Company Age</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Pays Tax</th>
                    </tr>
                </thead>
                <tbody>
                    {personsList.map((item, indexArray) => (
                        <tr key={indexArray}>
                            <td>{item.id}</td>
                            <td>{item.companyAge}</td>
                            <td>{item.name.firstName} {item.name.surname}</td>
                            <td>{item.salary}</td>
                            <td>{item.position}</td>
                            <td>{item.team}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.paysTax === true ? "Da" : "Nu"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            
        </div>
    );
}

export default InfoAxios;
