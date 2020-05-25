import React from 'react';

 const Person=(props)=>{
    return (
        <div id="person">
            <h3>Hi My name Is {props.name}</h3>
            <p>My age is {props.age}</p>
            
        </div>
    );
}

export default Person;