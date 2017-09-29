import React, { Component } from 'react';
import './App.css';

import Search from './Search';
import Value from './Value';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cars : ['Ferrari', 'Lamborgini', 'Toyota', 'Lexus'],
            filter : []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name){
        this.setState({name :name});
        this.setState({filter: this.state.cars.filter(car => {
                return car.toLowerCase().includes(name);
            })
        });
    }

    render() {
        return (
            <div>
                <Search onChangeHandle = {this.handleChange}/>
                <Value name={this.state.name}/>
                <List cars={this.state.filter}/>
            </div>
        )
    }
}

export default App;
