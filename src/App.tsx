import React from 'react';
import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

import './App.css';

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }
  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   },
  // ]

  return (
    <div className="App">
      {/* <Person name={personName}/>
      <PersonList names={nameList}/> */}
      <Status status='error'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leo!</Heading>
      </Oscar>
      <Greet 
        name = 'Matt'
        isLoggedIn = {false}
        />
    </div>
  );
}

export default App;
