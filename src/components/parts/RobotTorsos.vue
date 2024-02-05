<template>
    <div class="parts">
        <h2>Корпуса</h2>
        Туловище - это центральная часть вашего робота, которая скрепляет все вместе. Правильный выбор туловища поможет
        обеспечить хорошую работу вашего робота с выбранными вами деталями.
        <div v-for="(torso, idx) in parts.torsos" :key="idx" class="parts-info">
            <h4 class="mini-title">{{ torso.title }}</h4>
            <div>{{ torso.description }}</div>
        </div>
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
    name: 'RobotTorsos',
    mixins: [getPartsMixin],
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
