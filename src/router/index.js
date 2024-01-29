import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import RobotBuilder from '../pages/RobotBuilder.vue';
import PartInfoPage from '../pages/PartInfoPage.vue';
import BrowseParts from '../pages/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';
import SideBarStandard from '../components/sideBars/SideBarStandard.vue';
import SideBarBuild from '../components/sideBars/SideBarBuild.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                default: HomePage,
                asideBar: SideBarStandard,
            },
        },
        {
            path: '/build',
            name: 'Build',
            components: {
                default: RobotBuilder,
                asideBar: SideBarBuild,
            },
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
            beforeEnter(to, from, nextF) {
                const isValidId = Number.isInteger(Number(to.params.id));
                nextF(isValidId);
            },
        },
    ],
});
