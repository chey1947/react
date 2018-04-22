import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Galary from './Galary'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Galary />, document.getElementById('root'));
registerServiceWorker();
