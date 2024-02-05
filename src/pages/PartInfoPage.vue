<template>
    <div class="content">
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
import getPartsMixin from '../components/parts/get-parts-mixin';

export default {
    name: 'PartInfoPage',
    mixins: [getPartsMixin],

    props: {
        partType: {
            type: String,
        },
        id: {
            type: [String, Number],
            validator(value) {
                return Number.isInteger(Number(value));
            },
        },
    },
    computed: {
        part() {
            const { partType, id } = this;
            return this.parts[partType].find((el) => el.id === +id);
        },
    },
};
</script>

<style scoped>
.content {
    position: relative;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
