import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render() {
        return (
            <Aux>
                {/*tu będzie wizualizacja Burgera*/}
                <Burger/>
                {/*//tu będzie panel zarządzający usuwaniem i dodawaniem skłądników*/}
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;