<template>
    <div class="content">
        <button @click="addToCart()" class="add-to-cart">Добавить в корзину</button>
        <div class="top-row">
            <PartSelector :parts="availableParts.heads" position="top" />
        </div>
        <div class="middle-row">
            <PartSelector :parts="availableParts.arms" position="left" />
            <PartSelector :parts="availableParts.torsos" position="center" />
            <PartSelector :parts="availableParts.arms" position="right" />
        </div>
        <div class="bottom-row">
            <PartSelector :parts="availableParts.bases" position="bottom" />
        </div>
        <div>
            <h1>Корзина</h1>
            <table>
                <thead>
                    <tr>
                        <th>Robot</th>
                        <th class="cost">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(robot, index) in cart" :key="index">
                        <td>{{ robot.head.title }}</td>
                        <th class="cost">{{ robot.cost }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import availableParts from '../assets/data/parts';
import createdHookMixin from '../hooks/created-hook-mixin';
import PartSelector from '../components/PartSelector/PartSelector.vue';

export default {
    name: 'RobotBuilder',
    components: { PartSelector },
    mixins: [createdHookMixin],
    data() {
        return {
            cart: [],
            availableParts,
            selectedRobot: {
                head: {},
                leftArm: {},
                torso: {},
                rightArm: {},
                base: {},
            },
        };
    },
    computed: {
        saleBorderClass() {
            return this.selectedRobot.head.onSale ? 'sale-border' : '';
        },
        borderStyleBase() {
            return { border: this.selectedRobot.base.onSale ? '3px solid red' : '' };
        },
    },
    methods: {
        addToCart() {
            const robot = this.selectedRobot;
            const cost =
                robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.base.cost + robot.torso.cost;
            this.cart.push(Object.assign({}, robot, { cost }));
        },
    },
};
</script>

<style lang="scss" scoped>
.part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
}
.part {
    img {
        width: 165px;
    }
}
.top-row {
    display: flex;
    justify-content: space-around;
}
.middle-row {
    display: flex;
    justify-content: center;
}
.bottom-row {
    display: flex;
    justify-content: space-around;
    border-top: none;
}
</style>
