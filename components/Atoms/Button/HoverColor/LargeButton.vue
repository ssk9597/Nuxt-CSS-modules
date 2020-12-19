<template>
    <div>
        <a href="#" class="el-btn-large btn-color-blue"> 大ボタン </a>
    </div>
</template>

<script>
export default {
    name: 'LargeButton',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-btn-large {
    display: inline-block;
    width: 340px;
    max-width: 100%;
    padding: 25px 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #fff;
    font-size: 1.375rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
}

.btn-color-blue {
    //colorはここから
    // http://clrs.cc/
    color: #0074d9;
    border: 2px solid #0074d9;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #0074d9;
        color: #fff;
    }
}
</style>
