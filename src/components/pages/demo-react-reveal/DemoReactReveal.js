import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom, Slide, Roll, Bounce, LightSpeed } from 'react-reveal';

const style = {
    width: '84%',
    margin: '25px auto',
    textAlign: 'justify'
};

class DemoReactReveal extends Component {
    constructor(props) {
        super(props);
        document.title = 'React Reveal';

        const text = 'One of the best ways to learn how to do anything new (including software APIs!) is to get your hands dirty as quickly as possible. These examples will show you how to perform tasks ranging from something as simple as applying DataTables to an HTML table, right the way through to doing server-side processing with pipelining and custom plug-in functions.';

        this.repeat = [];
        for (let i = 0; i < 1000; i++) this.repeat.push({id: i, text});
    }
    render() {
        return (
            <div style={style}>
                {this.repeat.map((o, i) => {
                    const step = 50;
                    if(i < step) {
                        return(
                            <Fade
                                key={o.id}
                                left={i % 4 === 0}
                                
                            ></Fade>
                        )
                    }
                })
                    
                }
            </div>
        );
    }
}

export default DemoReactReveal;