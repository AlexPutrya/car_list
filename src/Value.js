import React, { Component } from 'react';

class Value extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {name : props.name};
    // }
    render(){
        return(
            <h3>{this.props.name}</h3>
        )
    }
}

export default Value;
