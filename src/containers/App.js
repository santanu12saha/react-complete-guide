import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons : [
        {id: 'assd1', name: 'Santanu', age: 29},
        {id: 'assd2', name: 'Sumitra', age: 28},
        {id: 'assd3', name: 'Mahesh', age:28}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }

    console.log("[App.js] Inside Constructor", props);
  }

  UNSAFE_componentWillMount(){
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount(){
    console.log("[App.js] Inside componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps, nextState);
    return nextState.persons !== this.state.persons ||
          nextState.showPersons !== this.state.showPersons;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate(){
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }
   
  /*state = {
    persons : [
      {id: 'assd1', name: 'Santanu', age: 29},
      {id: 'assd2', name: 'Sumitra', age: 28},
      {id: 'assd3', name: 'Mahesh', age:28}
    ],
    otherState: 'some other value',
    showPersons: false
  }*/

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

    // Bad way of doing state state change

    //this.setState({showPersons: !doesShow, toggleClicked:this.state.toggleClicked + 1});

    // God way of doing set state change
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render(){
    console.log("[App.js] Inside render()");

    let persons = null;

    if( this.state.showPersons ){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
    }
   
    return (
        <Aux>
            <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
            <Cockpit
              appTitle={this.props.title} 
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);

