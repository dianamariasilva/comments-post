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
  const items = model.people.map((list, index) => {
     return (
        <li key={list.id}>
           <input
              type="text"
              value={list.name}
              onChange={e =>
                 model.updateGuessList(index, {
                    id: list.id,
                    name: e.target.value,
                    completed: list.completed
                 })}
           />
           <ul>
             <li>
                <button className="blue" onClick={() => model.removeList(list)}> Remove</button>
                <button className="blue" onClick={() => model.abuse()}>Report abuse</button>
              </li>
            </ul>
        </li>
     );
  });
  return (
     <div className="wrapper">
          <header>
                <h3> {title} </h3>
                <p> {model.people.length} Comments </p>
                <form
                      onSubmit={e => {
                      e.preventDefault();
                      model.addGuest(model.inputValue);
                      }}
                >
                      <input onChange={e => (model.inputValue = e.target.value)} placeholder="Nombre"/>
                      <button className="blue1" type="submit">Post</button>
                </form>
          </header>
          <div className="main">	
                <ul id="invitedList">{items}</ul>	
          </div>
     </div>
  );
};

export default App