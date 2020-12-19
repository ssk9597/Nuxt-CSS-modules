<template>
    <div>
        <h3 class="el-lv3Heading">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Heading2',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-lv3Heading {
    color: #ffffff;
    background: #0074d9; /*背景色*/
    padding: 0.875rem; /*文字周りの余白*/
    font-size: 1.5rem;
    font-weight: bold;
}
</style>