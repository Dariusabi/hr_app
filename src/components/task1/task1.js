import React, { useState } from 'react';

import classes from './task1.module.css';
import Result from '../task2/task2';
import Search from '../Search/Search';

const Insert = () => {

    const initialState = {
        vechime: "",
        nume: "",
        salariu: "",
        functie: "",
        echipa: "",
        telefon: "",
        email: "",
        impozit: false
    }

    const [employee, setEmployee] = useState(initialState);

    const inputChangeHandler = (event) => {
        const { name, value, checked } = event.target;
        
        setEmployee({
            ...employee,
            [name]: value,
            impozit: checked
        });
        console.log(employee);
    };

    const [employeeList, setEmployeeList] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        if (employee.vechime.trim().length < 1 || 
            employee.nume.trim().length < 1 ||
            employee.salariu.trim().length < 1 ||
            employee.functie.trim().length < 1 ||
            employee.echipa.trim().length < 1 ||
            employee.telefon.trim().length < 1 ||
            employee.email.trim().length < 1) {
            return alert("Completeaza toate campurile!")
        } else {
            setEmployeeList([...employeeList, employee])};
        setEmployee(initialState);
    };

    const [valueSearch, setValueSearch] = useState("");

    const onInputHandler = (event) => {
        setValueSearch(event.target.value);
    };


    // const confirmHandler = (event) => {
    //     const { checked } = event.target; 
    //     setEmployee({
    //         ...employee,
    //         impozit: checked});
        
    //     console.log(employee);
    // };

    return (
        <div className={classes.dataForm}>
            <form onSubmit={submitHandler} className={classes.form} >
                <div className={classes.task1}>
                    <label className={classes.idem}>Ani vechime</label>
                    <div>
                        <input
                            type="text"
                            name="vechime"
                            value={employee.vechime}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Nume</label>
                    <div>
                        <input
                            type="text"
                            name="nume"
                            value={employee.nume}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Salariu</label>
                    <div>
                        <input
                            type="number"
                            name="salariu"
                            value={employee.salariu}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Functie</label>
                    <div>
                        <input
                            type="text"
                            name="functie"
                            value={employee.functie}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Echipa</label>
                    <div>
                        <input
                            type="text"
                            name="echipa"
                            value={employee.echipa}
                            onChange={inputChangeHandler}
                            className={classes.dataInput}
                        />
                        <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    </div>
                </div>
                <div className={classes.task1}>
                    <label className={classes.idem}>Telefon</label>
                    <div>
                        <input
                            type="text"
                            name="telefon"
                            value={employee.telefon}
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
                    <label className={classes.idem}>Scutit de impozit</label>
                    <input type="checkbox" onChange={inputChangeHandler}  />
                </div>

                <p>
                    <img src="red_star.png" alt="star" width="8" height="8" className={classes.imag} />
                    Toate campurile sunt obligatorii
                </p>

                <button type="submit">Adauga angajat</button>
            </form>
            <div className={classes.value}>
                <Result
                    items={employeeList.filter(val => {
                        if (valueSearch === "") {
                            return val;
                        }
                        else if (val.nume.toLowerCase().includes(valueSearch.toLowerCase())) {
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
