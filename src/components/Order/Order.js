import React from 'react';
import classes from './Order.module.css';

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients: Cheese (1)</p>
        <p>Price: <strong>5.45 USD</strong></p>
    </div>
)

export default order;