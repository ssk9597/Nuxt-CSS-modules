<template>
    <div>
        <div class="text-center">
            <a class="el-label" href="">NEWS</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-center {
    text-align: center;
    padding-bottom: 25px;
}
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