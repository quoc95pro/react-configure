import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from './../../common/loading/Loading';

const LoadableComponent = Loadable({
    loader: () => import('./DemoLoadableComponent'),
    loading: Loading,
    delay: 300,
    timeout: 10000
});

class LoadableDemoComponent extends Component {
    render() {
        return <LoadableComponent />;
    }
}

export default LoadableDemoComponent;