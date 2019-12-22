import React, {Component} from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: ''
        }
    };

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data:</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder='Your Name'/>
                    <input className={classes.Input} type="email" name="email" placeholder='Your Mail'/>
                    <input className={classes.Input} type="text" name="street" placeholder='Your Street'/>
                    <input className={classes.Input} type="text" name="city" placeholder='Your City'/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;