<template>
    <div class="home">
        <div>
            <img class="robot" src="../assets/robot-home.png" aria-hidden="true" />
        </div>
        <div class="get-started"><router-link to="/build">Get started</router-link> building your first robot!</div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    text-align: center;
    min-height: 540px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.robot {
    height: 440px;
}
.get-started {
}
</style>
