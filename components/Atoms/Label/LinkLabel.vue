<template>
    <div>
        <a class="el-label" href="">{{ name }}</a>
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
a {
    transition: 0.25s;
    text-decoration: none;
}
.el-label {
    display: inline-block;
    padding: 0.2em 0.3em;
    background-color: #ff851b;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff851b;
    }
}
</style>