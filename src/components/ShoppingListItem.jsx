import React from 'react';

class ShoppingListItem extends React.Component {
    constructor (props) {
        super(props);

        //this.state = this.props;
    }

    render () {
        const {name, price} = this.props;
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.price}</h2>
            </div>
        );
    }
}

export default ShoppingListItem;