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

// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navbar
} from 'react-router-dom'
import {battle, fetchPopularRepos} from './api';
 
 
const Home = () => (
  <div className="text-center title">
    <h2>Github Battle: Battle your friends... and stuff.</h2>
    <button className="button0" to="/battle">
      <Link to="/battle">
        Battle
      </Link>
    </button>
  </div>
)

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

const Battle = ({model}) => (
  <div>
    <Grid>
      <Row className="show-grid text-center">
        <Col sm={12} md={6}>
          <br/>
          <h3>Player 1</h3>
          <form >
            <FieldGroup
              id="formControlsText"
              type="text"
              placeholder="Github username"
              onChange={e => (model.inputValue1 = e.target.value)}
            />
           </form>
        </Col>
        <Col sm={12} md={6}>
          <br/>
          <h3>Player 2</h3>
          <form onSubmit={e => {
             e.preventDefault();
              battle([
                model.inputValue1, // https://github.com/ivanseidel
                model.inputValue2]  // https://github.com/honcheng
              ).then((results) => {
                if (results === null){
                    console.log ('Looks like there was an error!\nCheck that both users exist on github.');
                }
                console.log ("battle result:", results[0], results[1]);

              });  
          }}>
            <FieldGroup
              id="formControlsText"
              type="text"
              placeholder="Github username"
              onChange={e => (model.inputValue2 = e.target.value)}
            />
            <input type="submit" className="button" value="Submit"></input>
            </form>
        </Col>  
      </Row>
    </Grid>
  </div>
)


const Popular = ({ match }) => (
  <div>
    <h3>{match.params.PopularId}</h3>
  </div>
)

const Popular1 = ({ match }) => (
  <div className="text-center">
    <h2>Popular</h2>
    <ButtonGroup>
      <Button>
        <Link to="popular1/all">
          All
        </Link>
      </Button>
      <Button>
        <Link to="popular1/javascript">
          Javascript
        </Link>
      </Button>
      <Button>
        <Link to="popular1/ruby">
          Ruby 
        </Link>
      </Button>
      <Button>
        <Link to="popular1/java">
          Java 
        </Link>
      </Button>
      <Button>
        <Link to="popular1/css">
          CSS 
        </Link>
      </Button>
      <Button>
        <Link to="popular1/python">
          Python
        </Link>
      </Button>
    </ButtonGroup>
  </div>
)

const App = ({model}) => (
  <Router>
    <div>
      <Nav className="Nav-principal" bsStyle="pills" activeKey={1}>
        <NavItem><Link exact to="/">Home</Link></NavItem>
        <NavItem><Link to="/battle">Battle</Link></NavItem>
        <NavItem><Link to="/popular1">Popular</Link></NavItem>
      </Nav>

      <hr/>

      <Route exact path="/" render={ () => <Home model = {model}/>}/>
      <Route path="/battle" render={ () => <Battle model = {model}/>}/>
      <Route path="/popular1" render={ () => <Popular1 model = {model}/>}/>
    </div>
  </Router>
)
export default App