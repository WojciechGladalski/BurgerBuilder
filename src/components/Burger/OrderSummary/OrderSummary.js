import React from 'react';

import Aux from '../../../hoc/AuxComponent';

const orderSummary = (props) => {
        const ingredientsSummary = Object.keys(props.ingredients)
            .map(igKey => {
                    return (
                        <li key={igKey}>
                                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
                        </li>);
            });
    return (
        <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                        {ingredientsSummary}
                </ul>
        </Aux>
    );
};

export default orderSummary;

//gdy zwracamy tylko jsx dajemy nawiasy okrągłę, gdy obiekt, lub coś większego z returnem - wtedy klamry