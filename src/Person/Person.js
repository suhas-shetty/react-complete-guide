import React from 'react';

import './Person.css';

const person = (props) => {

    return (
        <div className="person">
            <p onClick={props.click}>Hi I'm {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.Change} value={props.name}/>
        </div>
    );
}

export default person;