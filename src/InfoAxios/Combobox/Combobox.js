import React, { useState } from 'react';
import axios from 'axios';

import classes from './Combobox.module.css';

const Combobox = (props) => {

    const [currentEmployee, setCurrentEmployee] = useState('');
    const [addSalary, setAddSalary] = useState('');

    const employeeChangeHandler = (event) => {
        const employee = props.items.find(x => x._id === event.target.value);
        setCurrentEmployee(employee);
        
        props.salaryHandler(employee.salary);
    };
    

    const addChangedSalary = (event) => {
        setAddSalary(event.target.value);
    };

    const updateSalary = () => {
        axios.put(`http://localhost:3000/api/details/${currentEmployee._id}`, {
            "name": currentEmployee.name,
            "_id": currentEmployee._id,
            "email": currentEmployee.email,
            "phone": currentEmployee.phone,
            "team": currentEmployee.team,
            "position": currentEmployee.position,
            "salary": addSalary,
            "companyAge": currentEmployee.companyAge,
            "paysTax": currentEmployee.paysTax,
        })
            .then((response) => {
                console.log(response.data.data);
            });
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <div className={classes.combobox}>
            <form onSubmit={submitHandler} className={classes.salariati}>
                <div>
                    <label>Employees</label>
                    <select name="angajati" onChange={employeeChangeHandler} >
                        {props.items.map((item, indexArray) => (
                            <option key={indexArray} value={item._id} >{item.name.firstName} {item.name.surname} </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <label>New salary</label>
                    <input type="number" onChange={addChangedSalary} />
                    <br />
                    <br />
                    <button type="submit" onClick={updateSalary} >Change employee salary</button>
                </div>
            </form>
        </div>
    );
}

export default Combobox;
