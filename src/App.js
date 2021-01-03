import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
// import Radium, {StyleRoot}  from "radium";
import person from "./Person/person";
import Person from "./Person/person";

const StyledButton = styled.button`
      background-color: ${props => props.alt ? "green" : "crimson"};
      box-shadow: 0 2px 3px rgb(204, 204, 204);
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;  

      &:hover {
        background-color: ${props => props.alt ? "yellow" : "black"};
        color: black;
`;

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // switchNameHandler = ( newName ) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    // const persons = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  //     persons: [
  //       { id: "vsdf21", name: 'Max', age: 28 },
  //       { id: "vdrf31", name: event.target.value, age: 29 },
  //       { id: "grt43s1", name: 'Stephanie', age: 26 }
  //     ]
  //   } )
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // const style = {
    //   // backgroundColor: 'green',
    //   // boxshadow: " 0 2px 3px rgb(204, 204, 204)",
    //   // color: "white",
    //   // font: 'inherit',
    //   // border: '1px solid blue',
    //   // padding: '8px',
    //   // cursor: 'pointer',
    //   // ":hover": {
    //   //   backgroundColor: "orange",
    //   //   color: "black"
    //   // }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler()}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "yellow",
      //   color: "black",
      // };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes= ["red","bold"]
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.persons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
