import React from 'react';
import {render} from 'react-dom';
import Main from "./src/Main";
import Provider from "react-redux/es/components/Provider";
import {store} from "./src/redux/store";
import './css/styles.css';

render(<Provider store={store}>
    <Main/>
</Provider>, document.getElementById('app'));
