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
    padding-bottom: 0.5rem;
    border-bottom: solid 3px #0074d9;
    font-size: 1.25rem;
    font-weight: bold;
}
</style>