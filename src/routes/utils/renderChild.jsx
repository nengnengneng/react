import React, { Component } from 'react';
import { Route } from 'react-router-dom';


// 执行entry页面的renderChild方法，抛出一个组件
// Routes就是entry页面的Entry组件
export default (Routes) => {
    class SuperRouter extends Component {
        constructor (props) {
            super(props);
            let { routes, match } = this.props;
            let obj = routes.map((v, k) => {
                return <Route key={k} path={match ? (match.path + v.path) : v.path} render={props => <v.component routes={v.children} {...props} />}/>
            });
            this.state = {
                chilren: obj
            }
        }
        render () {
            return (
                <Routes children={this.state.chilren} {...this.props} />
            )
        }
    }
    return SuperRouter;
};
