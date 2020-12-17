<template>
    <div>
        <div class="text-center">
            <a href="#" class="el-btn btn-color-navy"> 標準ボタン </a>
        </div>
        <div class="text-left">
            <a href="#" class="el-btn btn-color-navy"> 標準ボタン </a>
        </div>
    </div>
</template>

<script>
export default {};
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

.btn-color-navy {
    //colorはここから
    // http://clrs.cc/
    background-color: #001f3f;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #001f3f;
    }
}
</style>
