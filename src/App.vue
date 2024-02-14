<template>
    <header>
        <nav>
            <ul>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Home' }" exact>
                        <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
                        Build-a-bot
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Build' }" exact> Build </router-link>
                </li>
                <li class="nav-item cart">
                    <router-link class="nav-link" to="/cart" exact> Корзина </router-link>
                    <div v-show="cart.length" class="cart-items">{{ cart.length }}</div>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <aside class="aside">
            <router-view name="asideBar"> </router-view>
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        cart() {
            return this.$store.state.robots.cart;
        },
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
    width: 964px;
    min-height: 300px;
}
header {
    background-color: #999;
    width: 1084px;
    margin: 0 auto;
}
ul {
    padding: 10px;
    display: flex;
}

.nav-link {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}

.router-link-active {
    color: #fff;
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
.container {
    display: flex;
    margin: 10px auto 0 auto;
    justify-content: center;
    max-width: 1084px;
}
.aside {
    padding: 30px;
    background-color: #aaa;
    width: 100px;
    min-height: 100%;
}
.nav-item.cart {
    position: relative;
    margin-left: auto;
    border: none;
    margin-right: 10px;
}
.cart-items {
    position: absolute;
    top: -3px;
    right: -9px;
    font-size: 14px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    background-color: mediumseagreen;
}
</style>
