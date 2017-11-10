import React from 'react';
import ShoppingListItem from './ShoppingListItem.jsx'
import TextBox from './FormInputs/TextBox.jsx'

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;

        this.addItem = this.addItem.bind(this);
    }

    addItem (food) {
        if (food !== '') {
            let newState = this.state;
            newState.data.push({name: food, price: 0});
            this.setState(newState);
        }
    }

    render() {
        let existingItems = this.state.data.map((item, i) => {
            return <ShoppingListItem
                    name={item.name}
                    price={item.price}
                    key={i}
                    />;
        });
        return (
            <div>
                <TextBox deliver={this.addItem}/>
                {existingItems}
            </div>
        );
    }
}

export default ShoppingList;