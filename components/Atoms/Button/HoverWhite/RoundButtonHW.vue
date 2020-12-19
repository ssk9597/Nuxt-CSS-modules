<template>
    <div>
        <nuxt-link to="/button" class="el-roundBtn btn-color">{{ name }}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'RoundButton',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-roundBtn {
    display: inline-block;
    width: 236px;
    max-width: 100%;
    padding: 15px 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
}

.btn-color {
    //colorはここから
    // http://clrs.cc/
    background-color: #ff851b;
    border: 2px solid transparent;
    //2つ濃い色
    border-bottom-color: #f57200;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff851b;
    }
}
</style>
