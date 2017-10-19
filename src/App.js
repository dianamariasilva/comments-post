import React, { Component } from 'react';
import { Grid, 
        Row, 
        Col, 
        ListGroup, 
        ListGroupItem, 
        Nav, 
        NavItem, 
        Button, 
        ButtonGroup,
        ControlLabel,
        FormGroup,
        FormControl} from 'react-bootstrap';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navbar
} from 'react-router-dom'
import {battle, fetchPopularRepos} from './api';

const App = ({ title, model }) => {
  const items = model.guests.map((todo, index) => {
     return (
        <li key={todo.id}>
           <input
              type="text"
              value={todo.name}
              onChange={e =>
                 model.updateGuessList(index, {
                    id: todo.id,
                    name: e.target.value,
                    completed: todo.completed
                 })}
           />
           <button onClick={() => model.removeTodo(todo)}> Remove</button>
        </li>
     );
  });
  return (
     <div className="wrapper">
          <header>
                <h3> {title} </h3>
                <p> {model.guests.length}Comments </p>
                <form
                      onSubmit={e => {
                      e.preventDefault();
                      model.addGuest(model.inputValue);
                      }}
                >
                      <input onChange={e => (model.inputValue = e.target.value)} placeholder="Nombre"/>
                      <button type="submit">Postearlo</button>
                </form>
          </header>
          <div className="main">	
                <ul id="invitedList">{items}</ul>	
          </div>
     </div>
  );
};

export default App