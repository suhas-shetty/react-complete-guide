import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
    
  state = {
    person: [
        {
          name: 'Steven Rogers',
          age: 117
        },
        {
          name: 'Peter Quill',
          age: 27
        },
        {
          name: 'T\'Challa',
          age: 25
        },
    ]
  };

  switchNameHandler = (name1, name2, name3) => {
    this.setState(
      {
        person: [
            {
              name: name1,
              age: 117
            },
            {
              name: name2,
              age: 27
            },
            {
              name: name3,
              age: 25
            },
        ]
      }
    );
  }

  changedNameHandler = (event) => {
    this.setState(
      {
        person: [
            {
              name: 'Steven Rogers',
              age: 117
            },
            {
              name: event.target.value,
              age: 27
            },
            {
              name: 'T\'Challa',
              age: 25
            },
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <p>Is this working?</p>
        <button onClick={() => this.switchNameHandler('Captian Rogers', 'Peter', 'Highness')}>Switch Names</button>
        <Person 
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          Change={this.changedNameHandler.bind(this)}
        />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'cap', 'Quill', 'King')}
          Change={this.changedNameHandler.bind(this)}
        >
        My Hobbies: Music
        </Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}
          Change={this.changedNameHandler.bind(this)}
        />
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m from react element'));
  }
}

export default App;
