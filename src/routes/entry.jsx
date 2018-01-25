import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import renderChild from './utils/renderChild';

class Entry extends Component {
    render () {
        return (
            <div id="app">
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
                <Link to="/index">index</Link>
                <Switch>
                    {this.props.children}
                    <Redirect to={this.props.defaultPath} />
                </Switch>
            </div>
        )
    }
}

export default renderChild(Entry);
