<template>
    <div class="parts">
        <h2>Руки</h2>
        Руки - это то, как ваш робот будет взаимодействовать с окружающим миром. Они бывают самых разных форм и функций.
        <div v-for="(arm, idx) in arms" :key="idx">
            <h4 class="mini-title">{{ arm.title }}</h4>
            <div>{{ arm.description }}</div>
        </div>
    </div>
</template>

<script>
import parts from '../../assets/data/parts';

export default {
    name: 'RobotArms',
    data() {
        return { arms: parts.arms };
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
