<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2; Свернуть </span>
            <span v-if="!open" @click="open = !open">&#x25BC; Развернуть </span>
        </div>
        <slot v-if="open"></slot>
    </div>
</template>

<script>
export default {
    name: 'CollapsibleSection',
    data() {
        return {
            open: true,
        };
    },
};
</script>

<style scoped>
.header {
    text-align: center;
    background-color: grey;
    padding: 3px;
    cursor: pointer;
    width: 210px;
}
</style>
