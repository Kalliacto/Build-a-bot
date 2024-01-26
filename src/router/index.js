import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import RobotBuilder from '../pages/RobotBuilder.vue';
import PartInfoPage from '../pages/PartInfoPage.vue';
import BrowseParts from '../pages/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';

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
            path: '/parts/browse',
            name: 'BrowseParts',
            component: BrowseParts,
            children: [
                {
                    name: 'BrowseHeads',
                    path: 'heads',
                    component: RobotHeads,
                },
                {
                    name: 'BrowseArms',
                    path: 'arms',
                    component: RobotArms,
                },
                {
                    name: 'BrowseTorsos',
                    path: 'torsos',
                    component: RobotTorsos,
                },
                {
                    name: 'BrowseBases',
                    path: 'bases',
                    component: RobotBases,
                },
            ],
        },
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfoPage,
            props: true,
        },
    ],
});
