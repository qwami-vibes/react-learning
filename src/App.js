import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: 'first',  name: "Kwaame", age: 18},
      {id: 'second',  name: "Lord", age: 20},
      {id: 'third',  name: "Machele", age: 19}
    ],
    showPersons: false
  };
  
  deletePersonHandler = (personIndex) => {
    
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };
  
  changeNameHandler = (e, id) => {

    //finding the index of the changed element
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    //grabing and assigning the person to a new const
    const person = {...this.state.persons[personIndex]};

    //updating the event target field with value of the name
    person.name = e.target.value;

    //mutating the persons state
    const persons = [...this.state.persons];
    
    //updating the new person into the persons
    persons[personIndex] = person;

    // therefore changing the state of the persons
    this.setState({persons: persons});

  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render () {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '18px',
      cursor: 'pointer',
      font: 'inherit',
      border: '1px solid blue',
      transition: '0.2s'
    };

    let persons = null;

    let checkPersons = () => {

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.changeNameHandler(event, persons.id)}
                click={() => this.deletePersonHandler(index)}
              />
            })}
          </div>
        );

        style.backgroundColor = 'red';
      }
    };

    checkPersons();

    return (
      <div className = "App">
        <button style={style} onClick = {this.togglePersonsHandler}>Change name</button>
        {persons}
      </div>
      // React.createElement('div', {className: 'App'} ,'This is a React app')
    );
  }
}

export default App;
