<template>
    <div>
        <a href="#" class="el-roundBtn btn-color-orange">{{ name }}</a>
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
.text-center {
    text-align: center;
    padding-bottom: 24px;
}
.text-left {
    text-align: left;
    padding-bottom: 24px;
}

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

.btn-color-orange {
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
