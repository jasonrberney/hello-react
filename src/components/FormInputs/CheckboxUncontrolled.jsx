import React from 'react';

class CheckboxUncontrolled extends React.Component {
    constructor() {
        super();

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        
    }

    onSubmitHandler(event) {
        alert(this.refinput.checked);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type='checkbox' ref={input => this.refinput = input}/>
                <input type='submit' value='show me the money' />
            </form>
        );
    }
}

export default CheckboxUncontrolled;