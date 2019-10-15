import React, { Component } from 'react';
import ItemTable from './ItemTable';
import FormAddItem from './FormAddItem';

class DemoRedux extends Component {
    constructor(props) {
        super(props);

        document.title = 'Demo Redux';
    }

    render() {
        return (
            <div>
                <FormAddItem />
                <ItemTable />
            </div>
        );
    }
}

export default DemoRedux;