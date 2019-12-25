import React, { Component } from 'react';
import classes from './Cockpit.css';

class Cockpit extends Component {

  render(){

    let assignedclasses = [];

    let btnClass = '';

    if(this.props.showPersons){
        btnClass = classes.Red;
    }

    if(this.props.persons.length <= 2){
      assignedclasses.push(classes.red); 
    }

    if(this.props.persons.length <= 1){
      assignedclasses.push(classes.bold);
    }

    return (
      <div className={classes.Cockpit}>
          <h1>{ this.props.appTitle }</h1>
          <p className={assignedclasses.join(' ')}>This is really working!</p>
          <button
              className={btnClass} 
              onClick={this.props.clicked}>Toggle Persons</button>
      </div>        
    );

  }
}

export default Cockpit;