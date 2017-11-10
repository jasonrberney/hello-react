import React from 'react';

class CheckboxControlled extends React.Component {
    constructor() {
        super();
        this.state = {
            jasonVal: false
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({jasonVal: !this.state.jasonVal});
    } 

    onSubmitHandler(event) {
        alert(this.state.jasonVal);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type='checkbox' checked={this.state.jasonVal} onChange={this.handleChange}/>
                <input type='submit' value='show me the controlled money' />
            </form>
        );
    }
}


export default CheckboxControlled;