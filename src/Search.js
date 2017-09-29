import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.setInput = this.setInput.bind(this);
    }
    setInput(event) {
        this.props.onChangeHandle(this.InputVal.value);
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" ref={(input) => this.InputVal = input} onChange={this.setInput}/>
                </form>
            </div>
        )
    }
}

export default Search;
