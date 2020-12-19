<template>
    <div>
        <a href="#" class="el-beforeIconButton btn-color-white">
            <fa class="icon" :icon="icon" />{{ name }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'IconSmall',
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: 'download',
        },
    },
};
</script>

<style lang="scss" scoped>
.el-beforeIconButton {
    position: relative;
    display: inline-block;
    padding: 0.2em 0.3em;
    text-decoration: none;
    transition: 0.25s;
    color: #111111;
}

.icon {
    display: inline-block;
    margin-right: 0.5em;
    font-weight: 900;
}

.btn-color-white {
    //colorはここから
    // http://clrs.cc/
    background-color: #ffffff;
    border: 1px solid currentColor;

    &:focus,
    &:hover {
        background-color: #111111;
        border-color: currentColor;
        color: #ffffff;
    }
}
</style>
