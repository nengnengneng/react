import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import {Provider} from 'react-redux';
import store from './store/store';
// import Routes from './routes';
import './css/todo.css';

if(NODE.ENV=='development'){
    console.log('现在是开发阶段')
}else{
    console.log('现在是打包阶段')
}

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
)