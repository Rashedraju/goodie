import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Foods from '../../components/Foods/Foods';
import Hero from '../../components/Hero/Hero';
import Home from '../../components/Home/Home';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../store/actions';

const Goodie = (props) => {
    const { onAuthRedirectPath, foods, onGetInitialFoods, cartItems } = props;
    useEffect(() => {
        // set auth redirect path
        onAuthRedirectPath('/');

        // fetch foods
        if (!foods.length > 0) {
            onGetInitialFoods(cartItems);
        }
    }, [cartItems, foods.length, onAuthRedirectPath, onGetInitialFoods]);

    return (
        <Aux>
            <Hero />
            <Foods foods={foods} />
            <Home />
        </Aux>
    );
};
const mapStateToProps = (state) => ({
    redirect: state.search.redirect,
    foods: state.landingPage.foods,
    cartItems: state.cart.foods,
});

const mapDispatchToProps = (dispatch) => ({
    onGetInitialFoods: () => dispatch(actions.getInitailFood()),
    onAuthRedirectPath: (path) => dispatch(actions.autRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Goodie);
