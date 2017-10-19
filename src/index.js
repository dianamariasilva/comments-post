import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Utils from './Utils';


class Model {
    constructor () {
        this.guests = [];
        this.inputValue = null;
        this.render = undefined;
     }
   
     subscribe(render) {
        this.render = render;
     }
     inform() {
        this.render();
     }
     addGuest(text, Utils) {
        this.guests.push({
           id: Utils, // local storage
           name: text,    // el texto que pongo
           completed: false  //estado 
        });
        this.inform();
     }
     updateGuessList(index, todo) {
        this.guests[index] = todo;
        this.inform();
     }
     removeTodo(todo) {
        this.guests = this.guests.filter(item => item !== todo);
        this.inform();
     }
}

let model = new Model();
let render = () => {
   ReactDOM.render(
      <App title="Red Social" model={model} />,
      document.getElementById('container')
   );
};
//view etiqueta, model propiedad

model.subscribe(render);
render(); 