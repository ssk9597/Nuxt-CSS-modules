<template>
    <div>
        <span class="el-beforeIcon">
            <a href="#"> <fa class="icon" icon="file-pdf" />ファイル名.pdf </a>
        </span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-beforeIcon {
    display: inline-block;

    & a {
        color: #111111;
    }
}

.icon {
    display: inline-block;
    margin-right: 0.3em;
    font-weight: 400;
    color: #111111;
}
</style>
