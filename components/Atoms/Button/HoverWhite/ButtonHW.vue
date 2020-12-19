<template>
    <div>
        <nuxt-link to="/button" class="el-btn btn-color">{{ name }}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-btn {
    display: inline-block;
    width: 300px;
    max-width: 100%;
    padding: 20px 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
}

.btn-color {
    //colorはここから
    // http://clrs.cc/
    background-color: #0074d9;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #0074d9;
    }
}
</style>
