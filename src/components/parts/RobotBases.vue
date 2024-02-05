<template>
    <div class="parts">
        <h2>Основы</h2>
        База имеет решающее значение для мобильности вашего робота. Обязательно выберите базу, которая будет хорошо
        сочетаться с местностью, где вашему роботу необходимо работать.
        <div v-for="(base, idx) in parts.bases" :key="idx">
            <h4 class="mini-title">{{ base.title }}</h4>
            <div>{{ base.description }}</div>
        </div>
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
    name: 'RobotBases',
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
