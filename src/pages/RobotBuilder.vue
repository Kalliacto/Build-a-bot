<template>
    <div class="content">
        <div class="cart-container">
            <button @click="addToCart()" class="add-to-cart">Добавить в корзину</button>
            <RobotBuilderPreview :selectedRobot="selectedRobot" />
        </div>
        <div class="top-row">
            <PartSelector
                :parts="availableParts.heads"
                position="top"
                @partSelected="(part) => (selectedRobot.head = part)"
            />
        </div>
        <div class="middle-row">
            <PartSelector
                :parts="availableParts.arms"
                position="left"
                @partSelected="(part) => (selectedRobot.leftArm = part)"
            />
            <PartSelector
                :parts="availableParts.torsos"
                position="center"
                @partSelected="(part) => (selectedRobot.torso = part)"
            />
            <PartSelector
                :parts="availableParts.arms"
                position="right"
                @partSelected="(part) => (selectedRobot.rightArm = part)"
            />
        </div>
        <div class="bottom-row">
            <PartSelector
                :parts="availableParts.bases"
                position="bottom"
                @partSelected="(part) => (selectedRobot.base = part)"
            />
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
    // {{ console.log(selectedRobot) }}
</template>

<script>
import availableParts from '../assets/data/parts';
import createdHookMixin from '../hooks/created-hook-mixin';
import PartSelector from '../components/PartSelector/PartSelector.vue';
import RobotBuilderPreview from '../components/RobotBuilderPreview/RobotBuilderPreview.vue';

export default {
    name: 'RobotBuilder',
    components: { PartSelector, RobotBuilderPreview },
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
            console.log(robot);
            const cost =
                robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.base.cost + robot.torso.cost;
            this.cart.push(Object.assign({}, robot, { cost }));
        },
    },
};
</script>

<style lang="scss">
.content {
    position: relative;
    margin: 20px 0;
}
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
.add-to-cart {
    width: 100%;
}
.cart-container {
    position: absolute;
    right: 1%;
    top: -40px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
