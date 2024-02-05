import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [],
    },
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(
                (el) => {
                    for (let key in el) {
                        if (el[key].onSale) {
                            return el[key].onSale;
                        }
                    }
                }
                // el.head.onSale || el.leftArm.onSale || el.torso.onSale || el.rightArm.onSale || el.base.onSale
            );
        },
    },
});
