<template>
    <div>
        <nuxt-link to="/button" class="el-btn-large btn-color"> 大ボタン </nuxt-link>
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
    color: #fff; //change
    font-size: 1.375rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
}

.btn-color {
    //colorはここから
    // http://clrs.cc/
    color: #0074d9; //change
    border: 2px solid #0074d9; //change
    background-color: #fff; //change

    &:focus,
    &:hover {
        background-color: #0074d9; //change
        color: #fff; //change
    }
}
</style>
