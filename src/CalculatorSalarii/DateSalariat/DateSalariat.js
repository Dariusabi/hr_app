import React from 'react';

import classes from './DateSalariat.module.css';


function DateSalariat(props) {

    return (
        <div className={classes.dateSalariat}>
            <form className={classes.formSalariat} onSubmit={props.onSubmit} >
                <div>
                    <input
                        name="salariu"
                        type="radio"
                        value="brut"
                        onChange={props.onChange}
                        id="brut"
                        defaultChecked
                    />
                    <label htmlFor="brut">Gross salary</label>
                </div>

                <div>
                    <input
                        name="salariu"
                        type="radio"
                        value="net"
                        onChange={props.onChange}
                        id="net"
                    />
                    <label htmlFor="net">Net salary</label>
                </div>

                <br />

                <div>
                    <label>Salary</label>
                    <input type="number" value={props.val} onChange={props.changeSalary} />
                </div>
                <br />
                <div>
                    <label>No Tax</label>
                    <input type="checkbox" onChange={props.onSkip} />
                </div>
            </form>
            <br />
        </div>
    )
}

export default DateSalariat;
