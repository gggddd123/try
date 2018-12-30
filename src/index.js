import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import"bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banana from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Banana />, document.getElementById('root'));
registerServiceWorker();
