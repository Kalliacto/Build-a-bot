<template>
    <div>
        <h2>Головы</h2>
        Голова - это то место, где будет находиться мозг вашего робота. Головы обладают разными возможностями, поэтому
        обязательно выберите ту, которая соответствует вашим потребностям.
        <div v-for="(head, idx) in heads" :key="idx">
            <h4>{{ head.title }}</h4>
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
