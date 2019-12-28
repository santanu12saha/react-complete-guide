import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';


class Person extends Component {
    constructor(props){
        super(props);
        console.log("[Person.js] Inside Constructor", props);
        this.inputElement = React.createRef();
    }
    
    UNSAFE_componentWillMount(){
        console.log("[Person.js] Inside componentWillMount()");
    }
    
    componentDidMount(){
        console.log("[Person.js] Inside componentDidMount()");
        if( this.props.position === 0 ){
            this.inputElement.current.focus();
        }
    }

    focus(){
        this.inputElement.current.focus();
    }
    
    render(){
        console.log("[Person.js] Inside render()")

        return (
            <Aux>
                {this.props.authenticated ? <p>I'm authenticated</p> : null}
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <input
                    ref={this.inputElement} 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        )

        /*return [
            <p key="1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>,
            <p key="2">{this.props.children}</p>,
            <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        ]*/
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default withClass(Person, classes.person);