import React, { useState } from 'react';

import classes from './task1.module.css';
import Result from '../task2/task2';
import Search from '../Search/Search';

const Insert = () => {

    const initialState = {
        age: "",
        name: "",
        salary: "",
        position: "Tester",
        team: "",
        phone: "",
        email: "",
        paysTax: false
    };

    const [employee, setEmployee] = useState(initialState);

    const inputChangeHandler = (event) => {
        const { name, value, checked } = event.target;
        
        setEmployee({
            ...employee,
            [name]: value,
            paysTax: checked
        });
        // console.log(employee);
    };

    const [employeeList, setEmployeeList] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        if (employee.age.trim().length < 1 || 
            employee.name.trim().length < 1 ||
            employee.salary.trim().length < 1 ||
            employee.position.trim().length < 1 ||
            employee.team.trim().length < 1 ||
            employee.phone.trim().length < 1 ||
            employee.email.trim().length < 1) {
            return alert("Fill in all the fields!")
        } else {
            setEmployeeList([employee, ...employeeList])};
        setEmployee(initialState);
    };

    const [valueSearch, setValueSearch] = useState("");

    const onInputHandler = (event) => {
        setValueSearch(event.target.value);
    };



    return (
        <div className={classes.dataForm}>
            <form onSubmit={submitHandler} className={classes.form} >
                <div className={classes.task1}>
                    <label className={classes.idem}>Age</label>
                    <div>
                        <input
                            type="text"
                            name="age"
                            value={employee.age}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Name</label>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Salary</label>
                    <div>
                        <input
                            type="number"
                            name="salary"
                            value={employee.salary}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Position</label>
                    <div>
                        <input
                            type="text"
                            name="position"
                            value={employee.position}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Team</label>
                    <div>
                        <input
                            type="text"
                            name="team"
                            value={employee.team}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Phone</label>
                    <div>
                        <input
                            type="text"
                            name="phone"
                            value={employee.phone}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Email</label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div>
                    <label className={classes.idem}>No tax</label>
                    <input type="checkbox" onChange={inputChangeHandler} checked="true" />
                </div>

                <p>
                    <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    All fields are required
                </p>

                <button type="submit">Add employee</button>
            </form>
            <div className={classes.value}>
                <Result
                    items={employeeList.filter(val => {
                        if (valueSearch === "") {
                            return val;
                        }
                        else if (val.name.toLowerCase().includes(valueSearch.toLowerCase())) {
                            return val;
                        }
                    })}
                />
                <Search value={valueSearch} onChange={onInputHandler} />
            </div>
        </div>
    )
}

export default Insert;