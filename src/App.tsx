import React from 'react';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
import Status from './components/Status';

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
      {/* <Greet 
        name = 'Matt'
        massageCount = {20}
        isLoggedIn = {false}
        />
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
      <Status status='error'/>
    </div>
  );
}

export default App;
