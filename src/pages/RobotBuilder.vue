<template>
    <div class="content">
        <button @click="addToCart()" class="add-to-cart">Добавить в корзину</button>
        <div class="top-row">
            <div class="top part">
                <div class="robot-name">
                    {{ selectedRobot.head.title }}
                </div>
                <span v-show="selectedRobot.head.onSale" class="sale"> Sale!</span>
                <img v-bind:src="selectedRobot.head.src" title="head" />
                <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
                <img v-bind:src="selectedRobot.leftArm.src" title="left arm" />
                <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
                <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
            </div>
            <div class="center part">
                <img v-bind:src="selectedRobot.torso.src" title="left arm" />
                <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
            </div>
            <div class="right part">
                <img v-bind:src="selectedRobot.rightArm.src" title="left arm" />
                <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
                <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
                <img :src="selectedRobot.base.src" title="left arm" />
                <button @click="selectNextBase()" class="prev-selector">&#9668;</button>
                <button @click="selectNextBase()" class="next-selector">&#9658;</button>
            </div>
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

function getPreviousValidIndex(index, length) {
    const deprecatedIndex = index - 1;
    return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
    const incrementIndex = index + 1;
    return incrementIndex > length - 1 ? 0 : incrementIndex;
}

export default {
    name: 'RobotBuilder',
    data() {
        return {
            cart: [],
            availableParts,
            selectedIndexHead: 0,
            selectedIndexLeftArm: 0,
            selectedIndexTorso: 0,
            selectedIndexRightArm: 0,
            selectedIndexBase: 0,
        };
    },
    computed: {
        selectedRobot() {
            return {
                head: availableParts.heads[this.selectedIndexHead],
                leftArm: availableParts.arms[this.selectedIndexLeftArm],
                torso: availableParts.torsos[this.selectedIndexTorso],
                rightArm: availableParts.arms[this.selectedIndexRightArm],
                base: availableParts.bases[this.selectedIndexBase],
            };
        },
    },
    methods: {
        addToCart() {
            const robot = this.selectedRobot;
            const cost =
                robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.base.cost + robot.torso.cost;
            this.cart.push(Object.assign({}, robot, { cost }));
        },
        selectPreviousHead() {
            this.selectedIndexHead = getPreviousValidIndex(this.selectedIndexHead, availableParts.heads.length);
        },
        selectNextHead() {
            this.selectedIndexHead = getNextValidIndex(this.selectedIndexHead, availableParts.heads.length);
        },
        selectPreviousLeftArm() {
            this.selectedIndexLeftArm = getPreviousValidIndex(this.selectedIndexLeftArm, availableParts.arms.length);
        },
        selectNextLeftArm() {
            this.selectedIndexLeftArm = getNextValidIndex(this.selectedIndexLeftArm, availableParts.arms.length);
        },
        selectPreviousTorso() {
            this.selectedIndexTorso = getPreviousValidIndex(this.selectedIndexTorso, availableParts.torsos.length);
        },
        selectNextTorso() {
            this.selectedIndexTorso = getNextValidIndex(this.selectedIndexTorso, availableParts.torsos.length);
        },
        selectPreviousRightArm() {
            this.selectedIndexRightArm = getPreviousValidIndex(this.selectedIndexRightArm, availableParts.arms.length);
        },
        selectNextRightArm() {
            this.selectedIndexRightArm = getNextValidIndex(this.selectedIndexRightArm, availableParts.arms.length);
        },
        selectPreviousBase() {
            this.selectedIndexBase = getPreviousValidIndex(this.selectedIndexBase, availableParts.bases.length);
        },
        selectNextBase() {
            this.selectedIndexBase = getNextValidIndex(this.selectedIndexBase, availableParts.bases.length);
        },
    },
};
</script>

<style scoped>
.part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
}
.part img {
    width: 165px;
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
.head {
    border-bottom: none;
}
.left {
    border-right: none;
}
.right {
    border-left: none;
}
.left img {
    transform: rotate(-90deg);
}
.right img {
    transform: rotate(90deg);
}
.bottom {
    border-top: none;
}
.prev-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
}
.next-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
}
.center .prev-selector,
.center .next-selector {
    opacity: 0.8;
}
.left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
}
.left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
}
.right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
}
.right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
}
.right .next-selector {
    right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: max-content;
    left: 50%;
    transform: translateX(-50%);
}
.sale {
    position: absolute;
    padding: 5px;
    background: crimson;
    border-radius: 50%;
    top: 5%;
    right: 5%;
    color: wheat;
    font-size: 12px;
}
.content {
    position: relative;
}
.add-to-cart {
    position: absolute;
    right: 30px;
    width: 220px;
    padding: 16px;
    font-size: 16px;
}
td,
th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
}
.cost {
    text-align: right;
}
</style>
