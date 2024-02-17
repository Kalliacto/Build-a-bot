<template>
    <div v-if="availableParts" class="content">
        <div class="part-info" id="partInfo"></div>
        <div class="cart-container">
            <button @click="addToCart()" class="add-to-cart">Добавить в корзину</button>
            <CollapsibleSection>
                <RobotBuilderPreview :selectedRobot="selectedRobot" />
            </CollapsibleSection>
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
    </div>
</template>

<script>
import createdHookMixin from '@/hooks/created-hook-mixin';
import PartSelector from '@/components/partSelector/PartSelector.vue';
import RobotBuilderPreview from '@/components/robotBuilderPreview/RobotBuilderPreview.vue';
import CollapsibleSection from '@/components/shared/CollapsibleSection.vue';
import { mapActions } from 'vuex';

export default {
    name: 'RobotBuilder',
    created() {
        // this.$store.dispatch('robots/getParts');
        this.getParts();
    },
    beforeRouteLeave(to, from, next) {
        if (this.addedToCart) {
            next(true);
        } else {
            const response = confirm(
                'Вы не добавили своего робота в корзинуб вы уверены, что хотите покинуть страницу?'
            );
            next(response);
        }
    },
    components: { PartSelector, RobotBuilderPreview, CollapsibleSection },
    mixins: [createdHookMixin],
    data() {
        return {
            addedToCart: false,
            cart: [],
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
        availableParts() {
            return this.$store.state.robots.parts;
        },
        saleBorderClass() {
            return this.selectedRobot.head.onSale ? 'sale-border' : '';
        },
        borderStyleBase() {
            return { border: this.selectedRobot.base.onSale ? '3px solid red' : '' };
        },
    },
    methods: {
        ...mapActions('robots', ['getParts', 'addRobotToCart2']),
        addToCart() {
            const robot = this.selectedRobot;
            const cost =
                robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + robot.base.cost + robot.torso.cost;
            // this.$store.dispatch('robots/addRobotToCart2', { ...robot, cost }).then(() => this.$router.push('/cart'));
            this.addRobotToCart2({ ...robot, cost }).then(() => this.$router.push('/cart'));
            this.addedToCart = true;
        },
    },
};
</script>

<style lang="scss">
.content {
    position: relative;
    margin: 20px 0;
    padding-right: 85px;
    padding-top: 25px;
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
.part-info {
    position: absolute;
    left: 0;
    width: 210px;
    max-height: 210px;
    width: fit-content;
}
</style>
