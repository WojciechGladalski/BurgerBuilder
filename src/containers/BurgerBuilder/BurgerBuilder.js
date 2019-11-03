import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent';

class BurgerBuilder extends Component{
    render() {
        return (
            <Aux>
                {/*tu będzie wizualizacja Burgera*/}
                <div>Burger</div>
                {/*//tu będzie panel zarządzający usuwaniem i dodawaniem skłądników*/}
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;