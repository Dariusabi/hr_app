import React from 'react';

import classes from './Search.module.css';

function Search(props) {
    return (
        <div className={classes.search}>
            <label>
                <input type="text" onChange={props.onChange} value={props.value} />
                <button>Search</button>
            </label>
        </div>
    )
}

export default Search;
