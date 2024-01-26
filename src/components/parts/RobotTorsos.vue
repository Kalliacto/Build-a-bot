<template>
    <div>
        <h2>Корпуса</h2>
        Туловище - это центральная часть вашего робота, которая скрепляет все вместе. Правильный выбор туловища поможет
        обеспечить хорошую работу вашего робота с выбранными вами деталями.
        <div v-for="(torso, idx) in torsos" :key="idx">
            <h4>{{ torso.title }}</h4>
            <div>{{ torso.description }}</div>
        </div>
    </div>
</template>

<script>
import parts from '../../assets/data/parts';

export default {
    name: 'RobotTorsos',
    data() {
        return { torsos: parts.torsos };
    },
};
</script>
