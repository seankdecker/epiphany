import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/app/App';
import registerServiceWorker from './js/registerServiceWorker';
import epiphany_canvas from './js/epiphany_canvas';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
epiphany_canvas();
