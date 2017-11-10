import React from 'react';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typed: '',
            props
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

        // events     
    onChangeHandler(event) {
            this.setState({typed: event.target.value});
    };

    onKeyPress(event) {
        //debugger
        let mykey = event.key;
        //this.setState({typed: mykey});
        console.log(mykey)

        if (event.key === 'Enter') {
            console.log(this.state.typed);
            this.props.deliver(this.state.typed);
            this.state.typed = '';
        }
    };

    render() {
        return (
            <div>
                <input type='text' value={this.state.typed} onKeyPress={this.onKeyPress} onChange={this.onChangeHandler}/>
            </div>
        );
    }
};

export default TextBox;