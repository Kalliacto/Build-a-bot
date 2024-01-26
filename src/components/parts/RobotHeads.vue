<template>
    <div class="parts">
        <h2>Головы</h2>
        Голова - это то место, где будет находиться мозг вашего робота. Головы обладают разными возможностями, поэтому
        обязательно выберите ту, которая соответствует вашим потребностям.
        <div v-for="(head, idx) in heads" :key="idx">
            <h4 class="mini-title">{{ head.title }}</h4>
            <div>{{ head.description }}</div>
        </div>
    </div>
</template>

<script>
import parts from '../../assets/data/parts';

export default {
    name: 'RobotHeads',
    data() {
        return { heads: parts.heads };
    },
};
</script>

<style scoped>
.parts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
}
.mini-title {
    margin-bottom: 15px;
}
</style>
