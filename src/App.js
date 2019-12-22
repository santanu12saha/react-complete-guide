import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 'assd1', name: 'Santanu', age: 29},
      {id: 'assd2', name: 'Sumitra', age: 28},
      {id: 'assd3', name: 'Mahesh', age:28}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
   // const persons = this.state.persons.slice();
   // ES6 spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //ES6 features
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //ES5 features
    //const person = Object.assign({}, this.state.persons[personIndex]);

    this.setState({ persons : persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){

    let persons = null;
    let btnClass = '';

    if( this.state.showPersons ){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedclasses = [];

    if(this.state.persons.length <= 2){
      assignedclasses.push(classes.red); 
    }

    if(this.state.persons.length <= 1){
      assignedclasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedclasses.join(' ')}>This is really working!</p>
          <button
            className={btnClass} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
  }
}

export default App;

