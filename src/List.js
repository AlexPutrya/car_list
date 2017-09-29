import React, { Component } from 'react';

class List extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        var car_list = this.props.cars.map((car) => <li>{car}</li>)
        return (
            <ul>{car_list}</ul>
        )
    }
}

export default List;
