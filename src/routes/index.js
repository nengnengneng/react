import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routerList from './config';
import Entry from './entry';

class Routes extends Component {
    render () {
        return (
            <Router>
                {/* 在entry页面打印props,就是routerList.
                props有两个值，一个是routes，一个是defaultPath */}
                <Entry {...routerList} />
            </Router>
        )
    }
}

export default Routes;