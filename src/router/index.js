import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import RobotBuilder from '../pages/RobotBuilder.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/build',
            name: 'Build',
            component: RobotBuilder,
        },
    ],
});
