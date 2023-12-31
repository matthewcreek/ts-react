import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {


  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}/>
      <Input value='' handleChange={event => console.log(event)}/>
    </div>
  );
}

export default App;
