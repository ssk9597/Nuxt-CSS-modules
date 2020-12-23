<template>
    <div>
        <h2 class="el-lv2Heading">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Heading1',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-lv2Heading {
    position: relative;
    font-size: 1.75rem;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
}

.el-lv2Heading:before {
    position: absolute;
    bottom: -5px;
    left: calc(50% - 30px);
    width: 60px;
    height: 5px;
    content: '';
    border-radius: 3px;
    background: #0074d9;
}
</style>