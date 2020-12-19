<template>
    <div>
        <strong class="el-caution">{{ text }}</strong>
    </div>
</template>

<script>
export default {
    name: 'Annotation',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-caution {
    color: #ff4136;
}
</style>