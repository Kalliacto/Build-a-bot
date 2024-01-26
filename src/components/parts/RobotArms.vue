<template>
    <div>
        <h2>Руки</h2>
        Руки - это то, как ваш робот будет взаимодействовать с окружающим миром. Они бывают самых разных форм и функций.
        <div v-for="(arm, idx) in arms" :key="idx">
            <h4>{{ arm.title }}</h4>
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
