<template>
    <div>
        <h1>Просмотр деталей</h1>
        <ul class="menu">
            <router-link :to="{ name: 'BrowseHeads' }">
                <li>Головы</li>
            </router-link>
            <router-link :to="{ name: 'BrowseArms' }">
                <li>Руки</li>
            </router-link>
            <router-link :to="{ name: 'BrowseTorsos' }">
                <li>Корпуса</li>
            </router-link>
            <router-link :to="{ name: 'BrowseBases' }">
                <li>Основания</li>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'BrowseParts',
};
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 30px;
}
.menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
}
ul {
    list-style-type: none;
}
a {
    color: palevioletred;
}
</style>
