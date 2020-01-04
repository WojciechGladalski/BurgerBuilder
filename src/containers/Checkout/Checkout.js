import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    //ingrediencje w state dajemy chwilowo, na czas uruchomienia checkouta, potem zmienimy
    state = {
        ingredients: null,
        totalPrice: 0
    };

    //zmiana z did na will spowoduje że ingredients zostaną wpierw ustawione zanim trafią do Route render na dole
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            //['salad', '1']
            //'price' ustawione w burgerbuilder w queryparams.push
            if (param[0] === 'price') {
                price = param[1];
            } else {
                //przez plusa konwertujemy ze stringa na liczbę
                ingredients[param[0]] = +param[1];
            }
        }
        //przekazuję ingrediencje z burgerbuildera do checkouta i obrazek burgera jest teraz taki jak wygląda zamówienie
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        render={(props) => (<ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props}/>)}/>
            </div>
        );
    }

}

export default Checkout;