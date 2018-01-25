import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import renderChild from '../utils/renderChild';

class Index extends Component {
    render () {
        let { match } = this.props;
        return (
            <div id="index">
                <Link to={match.path + '/home'}>home</Link>
                <Link to={match.path + '/mine'}>mine</Link>
                <Link to={match.path + '/more'}>more</Link>
                {this.props.children}
            </div>
        )
    }
}

export default renderChild(Index);
