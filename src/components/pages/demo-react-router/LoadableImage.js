import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from './../../common/loading/Loading';

const LoadableComponent = Loadable({
    loader: () => import('./Images.js'),
    loading: Loading
}); 

class LoadableImage extends Component {
    render() {
        return <LoadableComponent />;
        
    }
}

export default LoadableImage;