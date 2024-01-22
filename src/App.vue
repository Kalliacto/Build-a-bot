<template>
    <header>
        <nav>
            <ul>
                <li class="nav-item">
                    <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
                    Build-a-bot
                </li>
                <!-- <li class="nav-item"></li> -->
            </ul>
        </nav>
    </header>
    <main>
        <RobotBuilder />
        <!-- <Search /> -->
    </main>
</template>

<script>
// import HomePage from './pages/HomePage.vue';
import RobotBuilder from './pages/RobotBuilder.vue';
// import Search from './components/Search/Search.vue';

export default {
    name: 'App',
    components: {
        // HomePage,
        RobotBuilder,
        // Search,
    },
    provide: {
        userName: 'Jim',
    },
};
</script>

<style>
html {
    position: relative;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
body {
    background: linear-gradient(to bottom, #555, #999);
    background-attachment: fixed;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style scoped>
main {
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
    width: 1084px;
    min-height: 300px;
}
header {
    background-color: #999;
    width: 1084px;
    margin: 0 auto;
}
ul {
    padding: 3px;
    display: flex;
}
.nav-item {
    display: inline-block;
    padding: 5px 10px;
    font-size: 22px;
    border-right: 1px solid #bbb;
}
.logo {
    vertical-align: middle;
    height: 30px;
}
</style>
