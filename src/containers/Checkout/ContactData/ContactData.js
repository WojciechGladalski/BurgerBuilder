import React, {Component} from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import axios from '../../../axios-orders';


class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    };

    //event.preventDefault zapobiega przeładowaniu sie strony przy zamówieniu
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        //tworzymy pusty obiekt, do którego wrzucimy dane uzytkownika
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            //rozpoznajemy rodzaj inputa i wrzucamy tam wartość wprowadzona przez usera
            // (TYLKO WARTOŚĆ, config i type nas nie interesują), po czym dodajemy stała formData do stałej order poniżej
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customerData: formData
        };
        axios.post('orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                });
                //dzieki temu po złożeniu zamówienia przekieruje nas z powrotem do głównej
                //strony (reszta w checkout - props w Route -> render)
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            });
        console.log(this.props.ingredients);
    };

    //inputIdentifier to parametr po którym metoda rozpozna o który input chodzi. PONIŻEJ do metody przesyłamy formElement.id, co
    //jest unikalną nazwą tego inputa (pętla w render()).
    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);

        //robimy klon obiektu orderForm (za pomocą ...)
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        //tworzymy stałą pomocniczą, żeby zidentyfikować konkretny input w obiekcie orderForm (za pomocą inputIndentifier)
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        //chcemy pobrać wartośc od użytkownika (wpisywany w inpucie tekst) i podstawiamy go w stałej pomocniczej w value
        //(stała pomocnicza updatedFormElement jest klonem orderForm, więc posiada te same składowe, w tym value)
        updatedFormElement.value = event.target.value;

        //identyfikujemy konkretnego inputa w klonie orderForm i zamieniamy jego zawartość zawartościa stałej pomocniczej
        //updatedFormElement, a konkretnie value (pozostałe składowe sa bez zmian ponieważ są klonami orderForm a
        //zmienialiśmy tylko value
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        //ustawiamy state na nowo, z danymi podanymi w formularzu przez użutkownika
        this.setState({orderForm: updatedOrderForm});
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                    id: key,
                    config: this.state.orderForm[key]
                }
            );
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType="Success">ORDER</Button>
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