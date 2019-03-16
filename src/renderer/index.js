import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import App from './App';
import 'reset-css/reset.css';
import { GET_WEB_PORT } from '../events';

const webPort = ipcRenderer.sendSync(GET_WEB_PORT);

ReactDOM.render(<App webPort={webPort} />, document.getElementById('app'));
