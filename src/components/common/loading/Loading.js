import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Loading.css';

const propTypes = {
    error: PropTypes.bool,
    timeout: PropTypes.bool,
    passDelay: PropTypes.bool
};

const defaultProps = {
    error: false, timeOut: false, passDelay: false
};

class Loading extends Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {

        if (this.props.error) {
            return <div>Error</div>;
        } else if (this.props.timeOut){
            return <div>Time Out</div>;
        } else if (!this.props.passDelay){
            return null;
        }

        return (
            <div className="Loading">
                <div className="LoadingText">
                    Loading...
                </div>
            </div>
        );
    }
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;