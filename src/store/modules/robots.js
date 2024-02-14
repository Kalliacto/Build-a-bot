import axios from 'axios';

export default {
    namespaced: true,
    state: {
        cart: [],
        parts: null,
    },
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        updateParts(state, parts) {
            console.log(parts);
            state.parts = parts;
        },
    },
    actions: {
        getParts({ commit }) {
            axios
                .get('/api/parts')
                .then((result) => commit('updateParts', result.data))
                .catch((err) => console.log(err));
        },
        addRobotToCart2({ commit, state }, robot) {
            const cart = [...state.cart, robot];
            return axios.post('api/cart', cart).then(() => commit('addRobotToCart', robot));
        },
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(
                (robot) => {
                    for (let part in robot) {
                        if (robot[part].onSale) {
                            return true;
                        }
                    }
                }
                // el.head.onSale || el.leftArm.onSale || el.torso.onSale || el.rightArm.onSale || el.base.onSale
            );
        },
    },
};
