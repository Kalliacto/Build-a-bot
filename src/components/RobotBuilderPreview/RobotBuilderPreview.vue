<template>
    <div class="preview">
        <div class="preview-content">
            <div class="top-row">
                <img :src="selectedRobot.head.src" />
            </div>
            <div class="middle-row">
                <img :src="selectedRobot.leftArm.src" class="rotate-left" />
                <img :src="selectedRobot.torso.src" />
                <img :src="selectedRobot.rightArm.src" class="rotate-right" />
            </div>
            <div class="bottom-row">
                <img :src="selectedRobot.base.src" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selectedRobot: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.preview {
    position: relative;
    right: 0;
    width: 210px;
    max-height: 210px;
}
.preview-content {
    border: 1px solid #999;
    padding: 5px;
}
.preview img {
    width: 50px;
    height: 50px;
}
.rotate-right {
    transform: rotate(90deg);
}
.rotate-left {
    transform: rotate(-90deg);
}
</style>
