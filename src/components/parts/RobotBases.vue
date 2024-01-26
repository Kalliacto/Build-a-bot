<template>
    <div>
        <h2>Основы</h2>
        База имеет решающее значение для мобильности вашего робота. Обязательно выберите базу, которая будет хорошо
        сочетаться с местностью, где вашему роботу необходимо работать.
        <div v-for="(base, idx) in bases" :key="idx">
            <h4>{{ base.title }}</h4>
            <div>{{ base.description }}</div>
        </div>
    </div>
</template>

<script>
import parts from '../../assets/data/parts';

export default {
    name: 'RobotBases',
    data() {
        return { bases: parts.bases };
    },
};
</script>
