import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Welcome from './components/welcome.js';
import ListData from './components/listData.js'


function App() {
  return (
    <div>
      <h1>Shopping List</h1>
      <Welcome name="Cole"></Welcome>
      <ListData></ListData>

    </div>
  )
}

export default App;

