import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//This is a statufull component because here is using state
class App extends Component {
  state = {
    persons: [
      { id: 'sd23', name: 'Max', age: 28 },
      { id: 'sd23a', name: 'Manu', age: 29 },
      { id: 'sd23s', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  
  nameChangedHandler = (event, id) => {
    //we get index element based in id
    // p.id is received by this.state.persons and id by argument
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //object.assign pass an empty object as the first argument and then the object
    
    //which properties you want to assign into it as the second object or argument    
    //const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name =  event.target.value;
    
    //when we got an updated person's array, this finally allow us to set the state here and
    //set it to this updated persons array which is a copy of the old array 
    //where we updated one element with the updated person where we adjusted the name
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

    /*
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
    */
  }

  deletePersonHandler = (personIndex) => {
    //index is referent to position in an array
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    //Radium package is applied in pseudo selector ':hover'
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursos: 'pointer'
    };

    // let persons = null;  means the three person components won't display.
    //if (this.state.showPersons) { ... is false,  so,  this code is not activated.
    //So,  persons remains null
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {/* person is an element of the array and the "person" name was selected by us*/}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              //we got event before
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}  
        </div> 
      );
      style.backgroundColor = 'red';
      
    }

    /*  return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
      </div>
    );


    
    */
    //First argument: Element to render in the dom
    //Second argument: configuration for this
    //Third argument: any amount of children and we could have multiple arguments separated by commas
   
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now'));
    
    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //classes = ['red'. 'bold'];
    }

    return (
     
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {//In jsx, the events has their own way to write the events
        //  Example: In javascript, onclick is in lowercases and in JSX, the C is in Uppercases "onClick"
       }
       {//Don't add parentheses in the event because ES6 code
        //<button onClick ={this.switchNameHnadler()}>Switch Name</button>
          <button
            style = {style} 
            //onClick ={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
            onClick ={this.togglePersonsHandler}>Toggle Persons</button>
            
       }
            {persons}
       {/*
          //In case of don't exist "state" method
          <Person name="Max" age ="18"/>
          <Person name="Manu"  age="29">My hobbies: Racing</Person>
          <Person name="Fernando" age="28"/>
        */
        }
        {
          //"this" do reference to "App" class        
        }
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
