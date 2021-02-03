import React from 'react';

const person = props => {
    return (
        <div>
            <span onClick={props.click}>My name is {props.name} and I am {props.age} years old</span>
            {props.children}
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
    ) 
};

export default person;