import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DateSalariat from '../DateSalariat/DateSalariat';
import FormulaBrut from '../FormulaBrut/FormulaBrut';
import FormulaNet from '../FormulaNet/FormulaNet';
import Combobox from '../../InfoAxios/Combobox/Combobox';

import classes from './Calculator.module.css';

function Calculator() {

    const [personsList, setPersonsList] = useState([]);

    

    useEffect(() => {
        
        axios.get('http://localhost:3000/api/details')
            .then((response) => {
                console.log(response.data.data);
                setPersonsList(response.data.data);
            });
    }, []);

    const [check, setCheck] = useState(false);
    const [checkIt, setCheckIt] = useState(false);
    const [salary, setSalary] = useState('');

    const salaryInputHandler = (event) => {
        setSalary(event);
    };

    const checkHandler = (event) => {
        setCheck(event.target.value);
    };

    const checkSkip = (event) => {
        setCheckIt(event.target.checked);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };

    let content = "0.585";
    if (!checkIt) {
        content = "0.65";
    };



    let brut = "10%";
    if (checkIt) {
        brut = "0%";
    };

    let cas = Math.round(salary * "0.25");
    let cass = Math.round(salary * "0.1");
    let impozit = (!checkIt ? Math.round((salary - cas - cass) * "0.1") : 0);
    let salariuBrut = (Math.round(salary - (cas + cass + impozit)));


    return (
        <div className={classes.clac_final}>
            <Combobox items={personsList} salaryHandler={salaryInputHandler} />
            <DateSalariat
                onChange={checkHandler}
                onSkip={checkSkip}
                onSubmit={submitHandler}
                val={salary}
                files={personsList}
            />

            {(check !== "net") ?
                <FormulaBrut
                    impozitBrut={brut}
                    cas={cas}
                    cass={cass}
                    impozit={impozit}
                    total={salariuBrut}
                /> :
                <FormulaNet
                    salariuBrut={Math.round(salary / content)}
                />
            }

        </div>
    )
}

export default Calculator;
