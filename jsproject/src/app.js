import React from "react";
import ReactDOM from "react-dom";
import styles from '../src/app.css';

import { Root } from './container/main.jsx';
// import { ShowContainer } from './components/view/show.view.jsx';
import { Provider } from 'react-redux';
import { appStore } from './store/index';

ReactDOM.render( < Provider store = { appStore } >
        <
        Root / >
        <
        /Provider> , document.querySelector('.container'));