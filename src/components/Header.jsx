import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { isHoverOn: false };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler(event) {

        this.setState({ isHoverOn: true }, () => {
            console.log('This is what we expected: ' + this.state.isHoverOn);
        });
        console.log(this.state.isHoverOn);
    }

    onMouseLeaveHandler(event) {

        this.setState({ isHoverOn: false }, () => {
            console.log('This is what we expected: ' + this.state.isHoverOn);
        });
        console.log(this.state.isHoverOn);    
    }

    render() {

        const { value, color, message } = this.props;

        let realColor = this.state.isHoverOn ? '#283246' : color;

        return (
            <div onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                <h1 style={{color: realColor}}>{value}</h1>
                <div>{message}</div>
            </div>
        );
    }
}

export default Header;
