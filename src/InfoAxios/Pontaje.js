import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './InfoAxios.module.css';

const Pontaje = () => {

    const [pontaje, setPontaje] = useState([]);

    useEffect(() => {
        axios.get('pontaje.json')
            .then((response) => {
                setPontaje(response.data);
            });
    }, []);


    return (
        <div className={classes.result}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Hours</th>
                        <th>Date</th>
                        <th>Employee</th>
                    </tr>
                </thead>
                <tbody>
                    {pontaje.map((item, indexArray) => (
                        <tr key={indexArray}>
                            <td>{item.id}</td>
                            <td>{item.hours}</td>
                            <td>{item.date}</td>
                            <td>{item.employee}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            
        </div>
    );
}

export default Pontaje;
