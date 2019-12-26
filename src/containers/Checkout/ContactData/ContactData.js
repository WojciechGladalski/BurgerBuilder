import React, {Component} from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';


class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: ''
        },
        loading: false
    };

    //event.preventDefault zapobiega przeładowaniu sie strony przy zamówieniu
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Robert Sawyer',
                address: {
                    street: 'Jagiellonska 13',
                    zipCode: '97-500',
                    country: 'Poland'
                },
                email: 'sawyer@wp.pl'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                });
                
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            });
        console.log(this.props.ingredients);
    };

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder='Your Name'/>
                <input className={classes.Input} type="email" name="email" placeholder='Your Mail'/>
                <input className={classes.Input} type="text" name="street" placeholder='Your Street'/>
                <input className={classes.Input} type="text" name="city" placeholder='Your City'/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;