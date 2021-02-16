import React from 'react';

const divStyle ={
    padding: '18px',
    border: '1px solid grey',
    color: 'grey',
    margin: '5px auto',
    display: 'flex',
    width: '85%',
    flexDirection: 'column'    
};

const inputStyle = {
    width: '50%',
    color: '#a1a1a1',
    border: '1px solid #a1a1a1',
    margin: '0 auto',
    fontSize: '20px',
};

const person = props => {

    return (
        <div style={divStyle}>
            <span onClick={props.click}>My name is {props.name} and I am {props.age} years old</span>
            {props.children}
            <input style={inputStyle} type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
    ) 
};

export default person;