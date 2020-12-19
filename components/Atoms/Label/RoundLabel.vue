<template>
    <span class="el-roundLabel">{{ name }}</span>
</template>

<script>
export default {
    name: 'RoundLable',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-roundLabel {
    display: inline-block;
    padding: 0.3em 0.9em;
    background-color: #ff851b;
    border-radius: 1em;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
}
</style>