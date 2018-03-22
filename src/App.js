import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id:'p001', name: 'Max', age: 28},
      {id:'p007', name: 'Manu', age: 29},
      {id:'p009', name: 'Stefanie', age: 26},      
    ],
    otherState : 'Some other state',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons : [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stefanie', age: 26},      
      ] 
    } )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">

        <h1>This is a React App</h1>
        <p>This is really working!</p>

        <button 
        style={style}
        onClick= {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 0, 'Does this work now!!!'));
  }
}

export default App;
