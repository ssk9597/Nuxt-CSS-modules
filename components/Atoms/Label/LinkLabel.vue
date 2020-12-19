<template>
    <div>
        <nuxt-link to="/label" class="el-label">{{ name }}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'LinkLable',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-label {
    display: inline-block;
    padding: 0.2em 0.3em;
    background-color: #ff851b;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    border: 2px solid transparent;
    transition: 0.25s;
    text-decoration: none;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff851b;
    }
}
</style>