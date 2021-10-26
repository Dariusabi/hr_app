import React, { useState } from 'react';

import axios from 'axios';

import classes from './Test.module.css';

function Test() {

    // const scope = {
    //     userId: '',
    //     title: '',
    //     body: ''
    // };

    const [info, setInfo] = useState('');



    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInfo({ [name]: value });
    };

    const getHandler = () => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const postHandler = () => {

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId: 8,
            title: "uihiu"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const updateHandler = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 10,
            title: "foo",
            body: "bar",
            userId: 1
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const deleteHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', { id: 1 })
            .then(data => {
                console.log(data);
            })
    };

    // const { userId, title, body } = scope;

    return (
        <div className={classes.submit}>
            {/* <form onSubmit={submitHandler} >
                <div>
                    <input type="text" name="userId" onChange={changeHandler} />
                </div>
                <div>
                    <input type="text" name="title" onChange={changeHandler} />
                </div>
                <div>
                    <input type="text" name="body" onChange={changeHandler} />
                </div>  
            </form> */}
            <div className={classes.test_console} >
                <button type="submit" onClick={getHandler} >Submit</button>
                <button type="submit" onClick={postHandler} >Submit</button>
                <button type="submit" onClick={updateHandler} >Submit</button>
                <button type="submit" onClick={deleteHandler} >Submit</button>
            </div>
        </div>
    )
};

export default Test;