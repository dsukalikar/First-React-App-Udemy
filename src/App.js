import React, { useState, Component } from "react";
import "./styles.css";
import Radium from "radium";
import Person from "./Person/Person";

/* const App = () => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: "Deepak", age: 31 },
      { name: "Pallavi", age: 30 },
      { name: "Raghav", age: 3 }
    ],
    otherState: "With Value"
  });
  const switchNameHandler = () => {
    setPersonsState({
      person: [
        { name: "Deepak Sukalikar", age: 31 },
        { name: "Pallavi Sukalikar", age: 30 },
        { name: "Ram Sukalikar", age: 1 }
      ]
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.person[0].name}
        age={personsState.person[0].age}
      />
      <Person
        name={personsState.person[1].name}
        age={personsState.person[1].age}
      >
        My Hobbie: Reading
      </Person>
      <Person
        name={personsState.person[2].name}
        age={personsState.person[2].age}
      />
    </div>
  );
};
export default App; */

class App extends Component {
  state = {
    person: [
      { id: "asd", name: "Deepak", age: 31 },
      { id: "asdfg", name: "Pallavi", age: 30 },
      { id: "asdg", name: "Raghav", age: 3 }
    ],
    otherState: "With Value",
    showPersons: false
  };
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person;
    //const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => p.id === id);

    const person = { ...this.state.person[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({ person: persons });

    /* this.setState({
      person: [
        { name: "Deepak Sukalikar", age: 31 },
        { name: event.target.value, age: 30 },
        { name: "Ram Sukalikar", age: 1 }
      ]
    }); */
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      padding: "8px",
      margin: "5px 1px",
      cursor: "pointer",
      color: "white",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                id={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    const classes = [];

    if (this.state.person.length <= 2) {
      classes.push("red");
    }

    if (this.state.person.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2 className={classes.join(" ")}>
          Start editing to see some magic happen!
        </h2>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default Radium(App);
