import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import RobotBuilder from '../pages/RobotBuilder.vue';
import PartInfoPage from '../pages/PartInfoPage.vue';

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
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfoPage,
            props: true,
        },
    ],
});
