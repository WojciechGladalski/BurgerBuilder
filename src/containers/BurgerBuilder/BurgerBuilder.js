import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    //ALTERNATYWA DLA STATE:
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Aux>
                {/*tu będzie wizualizacja Burgera*/}
                <Burger ingredients={this.state.ingredients}/>
                {/*//tu będzie panel zarządzający usuwaniem i dodawaniem skłądników*/}
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;