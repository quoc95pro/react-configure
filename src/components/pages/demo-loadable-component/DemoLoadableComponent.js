import React, { Component } from 'react';

class DemoLoadableComponent extends Component {

    constructor(props) {
        super(props);
        document.title = 'Loadable Component';
    }

    render() {
        return (
            <div>
                Loadable Component
            </div>
        );
    }
}

export default DemoLoadableComponent;
