import React from "react";
import ReactDOM from "react-dom";
import styles from '../src/app.css';

// import { Root } from './components/dashboard/dashboard.jsx';
import { Root } from './components/view/show.view.jsx';
import { Provider } from 'react-redux';
import { appStore } from './store/index';

ReactDOM.render( < Provider store = { appStore } >
        <
        Root / >
        <
        /Provider> , document.querySelector('.container'));










        // import Search from '../src/components/search/search.jsx';

        // ReactDOM.render( < Search / > , document.querySelector('.container'));



        // import EntityService from '../src/components/service/entity.service.js';

        // ReactDOM.render( < EntityService / > , document.querySelector('.container'));