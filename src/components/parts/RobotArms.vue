<template>
    <div class="parts">
        <h2>Руки</h2>
        Руки - это то, как ваш робот будет взаимодействовать с окружающим миром. Они бывают самых разных форм и функций.
        <div v-for="(arm, idx) in parts.arms" :key="idx">
            <h4 class="mini-title">{{ arm.title }}</h4>
            <div>{{ arm.description }}</div>
        </div>
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
    name: 'RobotArms',
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
