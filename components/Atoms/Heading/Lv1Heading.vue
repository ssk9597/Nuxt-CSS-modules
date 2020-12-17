<template>
    <div class="container">
        <h1 class="el-lv1Heading">
            <span>ページタイトル</span>
        </h1>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
    padding: 10px 0;
}

.el-lv1Heading {
    padding: 30px 10px;
    background-color: #ff851b;
    color: #fff;
    font-size: 1.75rem;
    text-align: center;

    & span {
        position: relative;
        display: inline-block;
        transform: translateY(-20%);

        &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            width: 80px;
            height: 1px;
            background-color: currentColor;
            transform: translateX(-50%);
        }
    }
}
</style>