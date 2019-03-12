import React from 'react';
import './Person.css';
//import Radium  from 'radium';
//This  is stateless component because not be here an internal state management

//Props means "properties" and it's a React component class's or  a React Componentn Type's parameter
//Pros is simply an object giving us access to all the attributes we pass to our own components
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };



    //return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    
    //Children refers to any elements and this includes plain text as we have it
    //  here between the opening and closing tag our component and you could next complex
    //  html conde in between too
    // When we have empty paragraph is rendered though, so the paragraphs there it's just empty
    //  because props.children is basically undefined as null because we have nothing between opening and closing
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type ="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

//export default Radium(person);
export default person;