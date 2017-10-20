import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Utils from './Utils';


class Model {
    constructor () {
        this.people = [];
        this.inputValue = null;
        this.render = undefined;
        this.index = 0;
     }
   
     subscribe(render) {
        this.render = render;
     }
     inform() {
        this.render();
     }
     addGuest(text, Utils) {
        this.people.push({
           id: this.index++, // local storage
           name: text,    // el texto que pongo
           completed: false  //estado 
        });
        this.inform();
     }
     updateGuessList(index, list) {
        this.people[index] = list;
        this.inform();
     }
     removeList(list) {
        this.people = this.people.filter(item => item !== list);
        this.inform();
     }
     abuse(){
         alert("Tell us the reason in the next link : www.sdcjsdjcs.com");
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