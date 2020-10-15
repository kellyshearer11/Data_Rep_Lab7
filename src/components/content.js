import React from 'react';

// Content component
export class Content extends React.Component {

    render() {
        // method used to show time
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}