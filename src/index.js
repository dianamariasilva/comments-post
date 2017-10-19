import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



class Model {
    constructor(){
      this.inputValue1 = null;
      this.inputValue2 = null;
      this.notify = render;
    }
    subscribe (render) {
        this.notify = render;
    }
    
}

let model = new Model ();
const render = () => {
    ReactDOM.render(<App model = {model} />, document.getElementById('root'));
    registerServiceWorker();    
}

model.subscribe (render);
render();